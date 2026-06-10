import PageHero from "../../components/site/PageHero";
import BookingSection from "../../components/site/BookingSection";
import Testimonials from "../../components/site/Testimonials";

export const metadata = {
  title: "Book a Table | Bunora"
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Save your seat before the rush begins."
        description="Choose your table, bring your favorite people, and let our kitchen prepare a relaxed comfort-food experience with a premium finish."
        ctaHref="/menu"
        ctaLabel="Choose your food"
      />
      <BookingSection />
      <Testimonials />
    </>
  );
}
