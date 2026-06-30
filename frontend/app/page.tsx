import AboutPreview from "@/components/AboutPreview";
import FeaturedDishes from "@/components/FeaturedDishes";
import HeroSection from "@/components/HeroSection";
import MenuPreview from "@/components/MenuPreview";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedDishes />
      <MenuPreview />
      <AboutPreview />
      <Testimonials />
    </>
  );
}
