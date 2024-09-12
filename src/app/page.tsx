import Layout from "@/components/layouts/Layout";
import Image from "next/image";
import ContactUs from "./components/ContactUs";
import WordMarquee from "./components/WordMarquee";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Shaping from "./components/Shaping";
import Team from "./components/Team";

export default function Home() {
  return (
    <Layout className="overflow-y-clip">
      <Hero />
      <WordMarquee />
      <About />
      <WhyUs />
      <Shaping />
      {/* <Team /> */}
      <ContactUs />
    </Layout>
  );
}
