import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import AboutStrip from "@/components/AboutStrip";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <Hero />

      <ScrollReveal>
        <FeaturedCategories />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <AboutStrip />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <FAQ />
      </ScrollReveal>
    </>
  );
}
