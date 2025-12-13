
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Header from "@/components/ui/header";
export default function Home() {
  return (
    <div className="bg-black">
      <div className="w-full pt-[66px] pb-[10px]">
        <Header />


        <Hero />
        {/* <Findme /> */}
        <Work />
        <div id="projects">
          <Projects />
        </div>
      </div>
    </div>
  );
}
