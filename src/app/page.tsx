import {
  Navbar,
  Hero,
  ProductShowcase,
  Features,
  HowItWorks,
  Stats,
  Pricing,
  FinalCTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <HowItWorks />
        <Stats />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
