import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import AboutStrip from "@/components/AboutStrip";
import FoodGallery from "@/components/FoodGallery";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import SocialSection from "@/components/SocialSection";

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

      <FoodGallery />

      <SocialSection />

      <ScrollReveal delay={0.05}>
        <FAQ />
      </ScrollReveal>
    </>
  );
}
