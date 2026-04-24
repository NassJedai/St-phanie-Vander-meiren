import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marionnettes from "@/components/Marionnettes";
import Spectacles from "@/components/Spectacles";
import Livres from "@/components/Livres";
import Ateliers from "@/components/Ateliers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Marionnettes />
      <Spectacles />
      <Livres />
      <Ateliers />
      <Contact />
      <Footer />
    </main>
  );
}
