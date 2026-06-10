import Hero from "../components/site/Hero";
import Offers from "../components/site/Offers";
import MenuSection from "../components/site/MenuSection";
import AboutSection from "../components/site/AboutSection";
import ExperienceStrip from "../components/site/ExperienceStrip";
import BookingSection from "../components/site/BookingSection";
import Testimonials from "../components/site/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Offers />
      <MenuSection compact />
      <AboutSection />
      <ExperienceStrip />
      <BookingSection compact />
      <Testimonials />
    </>
  );
}
