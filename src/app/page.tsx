import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import Products from "@/components/Products";
import { Gallery4 } from "@/components/blocks/gallery4";
import WhyFinOS from "@/components/WhyFinOS";
import Technology from "@/components/Technology";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Gallery4 />
      <WhyFinOS />
      <Technology />
      <PartnersSection />
      <CTA />
      <Footer />
    </>
  );
}
