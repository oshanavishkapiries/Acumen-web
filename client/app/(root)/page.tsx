import Hero from "@/components/main/Hero";
import ContactUs from "@/components/sub/ContactUs";
import Services from "@/components/sub/Services";
import TechStack from "@/components/sub/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Services />
      <ContactUs />
    </>
  );
}
