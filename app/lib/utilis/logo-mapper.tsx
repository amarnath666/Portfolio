import React from "react";
import { IconCode } from "@tabler/icons-react";

const Logo = ({ src }: { src: string }) => {
  return <img src={src} alt="logo" className="w-4 h-4 rounded-full" />;
};

export const getLogoForTechnology = (technology: string) => {
  const logoMap: Record<string, React.ReactNode> = {
    "Next.js": <Logo src="/images/nextjs.png" />,
    React: <Logo src="/images/react.jpeg" />,
    TypeScript: <Logo src="/images/typescript.png" />,
    MongoDB: <Logo src="/images/mongodb.svg" />,
    "Node.js" : <Logo src="/images/nodejs.png" />,
    "Express.js" : <Logo src="/images/express.png" />,
    "GraphQL" : <Logo src="/images/graphql.png" />,
    "LangChain": <Logo src="/images/langchain.png" />,
    "Razorpay": <Logo src="/images/razorpay.png" />,
    "Tailwind CSS": <Logo src="/images/tailwind.png" />,
    "Convex": <Logo src="/images/convex.webp" />,
    "Redis": <Logo src="/images/redis.webp" />,
    AWS: <Logo src="/images/aws.png" />,
    Hostinger: <Logo src="/images/hostinger.svg" />,
    Docker: <Logo src="/images/docker.webp" />,
    "ChatGPT": <Logo src="/images/gpt.jpg" />,
  };

  return logoMap[technology] || <IconCode className="w-4 h-4 text-gray-500" />;
};
