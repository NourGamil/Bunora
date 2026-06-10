import "./globals.css";
import Navigation from "../components/site/Navigation";
import Footer from "../components/site/Footer";
import GSAPAnimations from "../components/site/GSAPAnimations";
import { brand, asset } from "../lib/site";

export const metadata = {
  title: `${brand.name} | Premium Burger & Comfort Food`,
  description:
    "Premium burgers, pizza, pasta, and comfort food served with a polished dining experience.",
  icons: {
    icon: asset("images/favicon.png")
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GSAPAnimations />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
