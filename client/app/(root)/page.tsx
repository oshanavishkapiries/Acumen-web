import Footer from "@/components/special/rootComponents/Footer";
import Hero from "@/components/special/rootComponents/Hero";
import Navbar from "@/components/special/rootComponents/Navbar";
import ContactUs from "@/components/special/rootComponents/ContactUs";
import Services from "@/components/special/rootComponents/Services";
import TechStack from "@/components/special/rootComponents/TechStack";
import AboutUs from "@/components/special/rootComponents/AboutUs";
import Slogan from "@/components/special/rootComponents/Slogan";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slogan />
      <TechStack />
      <Services />
      <ContactUs />
      <AboutUs />
      <Footer />
    </>
  );
}
