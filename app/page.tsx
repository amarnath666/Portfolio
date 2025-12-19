
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Divider from "@/components/ui/divider";
import GalleryComponent from "@/components/gallery-component";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black overflow-x-hidden">
      <div className="w-full pt-[66px] pb-[10px]">
        <Hero />
        <Divider />
        <Work />
        <Divider />
        <div id="projects">
          <Projects />
        </div>
        <Divider />
        <div id="gallery">
          <GalleryComponent />
        </div>
      </div>
    </div>
  );
}
