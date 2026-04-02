import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import Products from "@/components/Products";
import WhyFinOS from "@/components/WhyFinOS";
import Technology from "@/components/Technology";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ecosystem />
      <Products />
      <WhyFinOS />
      <Technology />
      <CTA />
      <Footer />
    </>
  );
}
