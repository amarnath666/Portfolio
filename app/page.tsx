import Findme from "@/components/Findme";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="bg-zinc-900">
      <div className="w-full max-w-3xl mx-auto py-[50px] px-4 ">
        <Hero />
        <Findme />
        <Work />
        <Projects />
      </div>
    </div>
  );
}
