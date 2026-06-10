import PageHero from "../../components/site/PageHero";
import AboutSection from "../../components/site/AboutSection";
import ExperienceStrip from "../../components/site/ExperienceStrip";
import Testimonials from "../../components/site/Testimonials";

export const metadata = {
  title: "About | Bunora"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Bunora"
        title="Fast comfort food, served with premium energy."
        description="Bunora brings together golden burgers, fresh pizza, silky pasta, and warm hospitality in a dining experience made for everyday cravings and special nights."
        ctaHref="/menu"
        ctaLabel="View the menu"
      />
      <AboutSection standalone />
      <ExperienceStrip />
      <Testimonials />
    </>
  );
}
