import {
  Navbar,
  Hero,
  Problem,
  ProductShowcase,
  ProductDetails,
  Features,
  HowItWorks,
  Stats,
  Pricing,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <ProductShowcase />
        <ProductDetails />
        <Features />
        <HowItWorks />
        <Stats />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
