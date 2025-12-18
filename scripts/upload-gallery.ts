import { S3Client, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

// Configuration
const R2_ENDPOINT = process.env.R2_ENDPOINT;
const R2_BUCKET = process.env.R2_BUCKET || "gallery";
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const DOMAIN = "https://assets.amarn.me"; // Derived from user's manual edit

if (!ACCESS_KEY_ID || !SECRET_ACCESS_KEY) {
    console.error("Error: R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY must be set in environment variables.");
    process.exit(1);
}

const s3 = new S3Client({
    region: "auto",
    endpoint: R2_ENDPOINT,
    credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
    },
});

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");

async function main() {
    if (!fs.existsSync(GALLERY_DIR)) {
        console.error(`Error: Gallery directory not found at ${GALLERY_DIR}`);
        process.exit(1);
    }

    const files = fs.readdirSync(GALLERY_DIR);

    for (const file of files) {
        const filePath = path.join(GALLERY_DIR, file);
        const ext = path.extname(file).toLowerCase();
        const basename = path.basename(file, ext);
        let finalFilePath = filePath;
        let finalFileName = file;

        // Skip DS_Store and directories
        if (file === ".DS_Store" || fs.statSync(filePath).isDirectory()) continue;

        // Convert .mov to .mp4
        if (ext === ".mov") {
            const mp4FileName = `${basename}.mp4`;
            const mp4FilePath = path.join(GALLERY_DIR, mp4FileName);

            // Check if mp4 already exists locally to avoid re-conversion (optional, but good for idempotency)
            // The user prompt implied: "check all the videos... if its in the .mov first convert... then upload"
            // I will convert if the source is .mov.

            console.log(`Converting ${file} to ${mp4FileName}...`);
            try {
                // ffmpeg command from prompt
                const command = `ffmpeg -i "${filePath}" -c:v libx264 -profile:v high -level 4.1 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 128k "${mp4FilePath}" -y`;
                // Added -y to overwrite if exists locally, as we want to ensure we have the converted versions
                execSync(command, { stdio: "inherit" });
                console.log(`Conversion successful: ${mp4FileName}`);

                finalFilePath = mp4FilePath;
                finalFileName = mp4FileName;
            } catch (error) {
                console.error(`Error converting ${file}:`, error);
                continue;
            }
        } else if (ext !== ".mp4") {
            // Skip non-video files or other formats for now
            continue;
        }

        // Process the .mp4 file (either original or converted)
        try {
            await uploadToR2(finalFilePath, finalFileName);
        } catch (error) {
            console.error(`Error processing ${finalFileName}:`, error);
        }
    }
}

async function uploadToR2(filePath: string, fileName: string) {
    // Check if exists
    try {
        await s3.send(new HeadObjectCommand({
            Bucket: R2_BUCKET,
            Key: fileName,
        }));
        console.log(`Skipping ${fileName}: Already exists on Cloudflare R2.`);
        console.log(`URL: ${DOMAIN}/${fileName}`);
        return;
    } catch (error: any) {
        if (error.name !== "NotFound") {
            // If it's a permission error or something else, rethrow or log? 
            // For 404/NotFound we proceed to upload.
            // @aws-sdk checks usually throw NotFound
            // Sometimes it's $metadata.httpStatusCode === 404
            if (error.$metadata?.httpStatusCode !== 404) {
                throw error;
            }
        }
    }

    // Upload
    console.log(`Uploading ${fileName} to R2...`);
    const fileBuffer = fs.readFileSync(filePath);

    await s3.send(new PutObjectCommand({
        Bucket: R2_BUCKET,
        Key: fileName,
        Body: fileBuffer,
        ContentType: "video/mp4",
        CacheControl: "public, max-age=31536000, immutable",
    }));

    console.log(`Successfully uploaded ${fileName}`);
    console.log(`URL: ${DOMAIN}/${fileName}`);
}

main().catch(console.error);
