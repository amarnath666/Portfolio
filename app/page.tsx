import Findme from "@/components/Findme";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="w-full py-[20px]  ">



        <Hero />
        <Findme />
        <Work />
        <Projects />
      </div>
    </div>
  );
}
