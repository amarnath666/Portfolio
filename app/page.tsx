
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Header from "@/components/ui/header";
import Divider from "@/components/ui/divider";
export default function Home() {
  return (
    <div className="bg-white dark:bg-black overflow-x-hidden">
      <div className="w-full pt-[66px] pb-[10px]">
        <Header />


        <Hero />

        <Divider />
        <Work />
        <Divider />
        <div id="projects">
          <Projects />
        </div>
      </div>
    </div>
  );
}
