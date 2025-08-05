import HeroSection from "@/app/_components/hero-section";
import AboutSection from "@/app/_components/about-section";
import OurService from "@/app/_components/our-service";
import OurWork from "@/app/_components/our-work";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OurService />
      <OurWork />
      <Footer />
    </>
  );
}
