import { Navbar, Footer } from "@/components/sections";
import { ProductHero, ProductFeatures, ProductSpecs, ProductCTA } from "@/components/product";

export const metadata = {
  title: "Attentia DM-1 | Product Details",
  description: "Explore the Attentia DM-1 driver monitoring device. HD camera, edge AI, LTE connectivity, and privacy-first design.",
};

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <ProductHero />
        <ProductFeatures />
        <ProductSpecs />
        <ProductCTA />
      </main>
      <Footer />
    </>
  );
}
