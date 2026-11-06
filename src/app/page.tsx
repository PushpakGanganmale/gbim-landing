import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Next sections go here, one component per Figma section */}
      </main>
    </>
  );
}
