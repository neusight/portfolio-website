import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { SelectedWork } from "@/components/site/selected-work";
import { About } from "@/components/site/about";
import { Process } from "@/components/site/process";
import { Philosophy } from "@/components/site/philosophy";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <About />
        <Process />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
