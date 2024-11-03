import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <div className="">
        <NavBar />
      </div>
      <div>
        <HeroSection />
      </div>
    </>
  );
}
