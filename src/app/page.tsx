import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { ValueProp } from "@/components/site/value-prop";
import { FeaturedBuild } from "@/components/site/featured-build";
import { SelectedWork } from "@/components/site/selected-work";
import { About } from "@/components/site/about";
import { Process } from "@/components/site/process";
import { Testimonials } from "@/components/site/testimonials";
import { Contact } from "@/components/site/contact";
import { Socials } from "@/components/site/socials";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProp />
        <FeaturedBuild />
        <SelectedWork />
        <About />
        <Process />
        <Testimonials />
        <Contact />
        <Socials />
      </main>
      <Footer />
    </>
  );
}
