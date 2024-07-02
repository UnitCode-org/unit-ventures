import Layout from "@/components/layouts/Layout";
import Image from "next/image";
import ContactUs from "./components/ContactUs";
import WordMarquee from "./components/WordMarquee";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <Layout className="overflow-y-clip">
      <Hero />
      <WordMarquee />
      <ContactUs />
    </Layout>
  );
}
