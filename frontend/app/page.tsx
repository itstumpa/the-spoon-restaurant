import AboutPreview from "@/components/AboutPreview";
import BestDeals from "@/components/BestDeals";
import FeaturedDishes from "@/components/FeaturedDishes";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import MeetOurChefs from "@/components/MeetOurChefs";
import PopularCategories from "@/components/PopularCategories";
import ReservationSection from "@/components/ReservationSection";
import Testimonials from "@/components/Testimonials";
import TodaysSpecial from "@/components/TodaysSpecial";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularCategories />
      <WhyChooseUs />
      <FeaturedDishes />
      <TodaysSpecial />
      <MeetOurChefs />
      <BestDeals />
      <Gallery />
      <AboutPreview />
      <ReservationSection />
      <Testimonials />
      <LatestNews />
    </>
  );
}
