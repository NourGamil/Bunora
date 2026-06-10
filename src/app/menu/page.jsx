import PageHero from "../../components/site/PageHero";
import MenuSection from "../../components/site/MenuSection";
import BookingSection from "../../components/site/BookingSection";

export const metadata = {
  title: "Menu | Bunora"
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Full menu"
        title="Comfort food with premium detail."
        description="Explore juicy burgers, crisp pizzas, creamy pastas, and golden sides prepared for bold flavor and easy sharing."
        ctaHref="/book"
        ctaLabel="Reserve after choosing"
      />
      <MenuSection showHeader={false} />
      <BookingSection compact />
    </>
  );
}
