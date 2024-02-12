import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Serviceswork from "@/components/Services";
import Work from "@/components/Work";
import Image from "next/image";



export default function Home() {
  return <main>
  <Hero/>
  <About/>
  <Serviceswork/>
  <Work/>
  <Cta/>
  </main>;
  
}
