import Findme from "@/components/Findme";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Header from "@/components/ui/header";
export default function Home() {
  return (
    <div className="bg-black">
      <div className="w-full pt-[82px] pb-[10px]">
        <Header />


        <Hero />
        <Findme />
        <Work />
        <Projects />
      </div>
    </div>
  );
}
