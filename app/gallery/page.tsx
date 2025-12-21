import Gallery from "./gallery";
import Footer from "@/components/footer";
import Divider from "@/components/ui/divider";

const GalleryPage = () => {
    return (
        <div className="w-full pt-[66px] pb-[10px] bg-white dark:bg-black overflow-x-hidden">
            <Gallery />
            <Divider />
            <Footer />
        </div>
    );
};

export default GalleryPage;
