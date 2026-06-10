export const brand = {
  name: "Bunora",
  tagline: "Wood-fired comfort, finished like fine dining.",
  phone: "+01 1234567890",
  email: "hello@bunora.com",
  address: "Downtown Cairo, Egypt"
};

export function asset(path) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${path}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book Table" }
];

export const heroSlides = [
  {
    eyebrow: "Signature craft burgers",
    title: "Golden buns, premium cuts, unforgettable bites.",
    description:
      "A refined fast-casual kitchen serving flame-seared burgers, artisan pizza, silky pasta, and crisp sides with restaurant-level detail.",
    image: "images/f2.png"
  },
  {
    eyebrow: "Fresh from the oven",
    title: "Hand-finished pizza with a rich, smoky crust.",
    description:
      "Layered cheese, slow-cooked sauce, crisp edges, and toppings balanced for a bold, clean finish.",
    image: "images/f1.png"
  },
  {
    eyebrow: "Table-ready comfort",
    title: "Casual favorites, elevated with premium style.",
    description:
      "Built for cravings, dates, late nights, and group dinners — polished, generous, and fast without feeling ordinary.",
    image: "images/f4.png"
  }
];

export const offers = [
  {
    title: "Tasty Thursdays",
    discount: "20% Off",
    description: "A weekly golden-hour deal for burgers, sides, and drinks.",
    image: "images/o1.jpg"
  },
  {
    title: "Pizza Days",
    discount: "15% Off",
    description: "Stone-style pizzas with premium toppings and a crisp finish.",
    image: "images/o2.jpg"
  }
];

export const categories = [
  { id: "all", label: "All" },
  { id: "burger", label: "Burger" },
  { id: "pizza", label: "Pizza" },
  { id: "pasta", label: "Pasta" },
  { id: "fries", label: "Fries" }
];

export const menuItems = [
  {
    title: "Truffle Melt Pizza",
    category: "pizza",
    price: 20,
    image: "images/f1.png",
    description: "Mozzarella, roasted mushroom, basil oil, and a crisp golden crust.",
    badge: "Chef pick"
  },
  {
    title: "Bunora Classic Burger",
    category: "burger",
    price: 15,
    image: "images/f2.png",
    description: "Smashed beef, aged cheddar, pickles, soft bun, and house sauce.",
    badge: "Signature"
  },
  {
    title: "Hot Honey Pizza",
    category: "pizza",
    price: 17,
    image: "images/f3.png",
    description: "Pepperoni, melted cheese, chili honey, and herbs over red sauce.",
    badge: "Spicy" 
  },
  {
    title: "Velvet Alfredo Pasta",
    category: "pasta",
    price: 18,
    image: "images/f4.png",
    description: "Creamy parmesan sauce, herbs, and fresh pasta finished with pepper.",
    badge: "Creamy"
  },
  {
    title: "Golden Skin Fries",
    category: "fries",
    price: 10,
    image: "images/f5.png",
    description: "Double-crisp fries with sea salt, paprika dust, and dipping sauce.",
    badge: "Crispy"
  },
  {
    title: "Burrata Garden Pizza",
    category: "pizza",
    price: 15,
    image: "images/f6.png",
    description: "Fresh tomato, basil, creamy burrata-style cheese, and olive oil.",
    badge: "Fresh"
  },
  {
    title: "Smoked Stack Burger",
    category: "burger",
    price: 12,
    image: "images/f7.png",
    description: "Charred patty, smoked sauce, caramelized onion, lettuce, and bun.",
    badge: "Smoky"
  },
  {
    title: "Crispy Chicken Bun",
    category: "burger",
    price: 14,
    image: "images/f8.png",
    description: "Crunchy chicken, slaw, cheddar, pickles, and spicy cream sauce.",
    badge: "Crunch"
  },
  {
    title: "Pomodoro Glow Pasta",
    category: "pasta",
    price: 10,
    image: "images/f9.png",
    description: "Bright tomato sauce, garlic, basil, parmesan, and a silky finish.",
    badge: "Light"
  }
];

export const stats = [
  { value: "9", label: "Signature plates" },
  { value: "4.9", label: "Guest rating" },
  { value: "10 am", label: "Daily opening" }
];

export const testimonials = [
  {
    name: "Moana Michell",
    role: "Regular guest",
    image: "images/client1.jpg",
    quote:
      "The place feels premium without being stiff. The burger was juicy, the fries were perfect, and the whole experience felt smooth."
  },
  {
    name: "Mike Hamell",
    role: "Food reviewer",
    image: "images/client2.jpg",
    quote:
      "Bunora has the kind of visual polish and menu confidence that makes a simple dinner feel like a proper night out."
  }
];

export const marqueeWords = ["Flame-seared", "Soft buns", "Golden fries", "Fresh pasta", "Hot pizza", "Late-night cravings"];
