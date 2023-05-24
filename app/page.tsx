import AboutSectionOne from "@/components/About/AboutSectionOne";
import Projects from "@/components/Projects";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Work from "@/components/Work";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Work />
      <Video />
      <AboutSectionOne />
      <Testimonials />
      <Projects />
      <Contact />
    </>
  );
}
