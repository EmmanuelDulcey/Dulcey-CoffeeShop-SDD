import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Catalog } from "@/components/site/Catalog";
import { Origin } from "@/components/site/Origin";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Catalog />
        <Origin />
        <Process />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
