"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Briefcase, Smile } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmall"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Fastuosa de Sergio's"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Fastuosa de Sergio's"
      description="Where culinary tradition meets artistic elegance. An unforgettable gastronomic experience."
      buttons={[
        {
          text: "Explore Menu",
          href: "#products",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-wood-chair_1339-6717.jpg?_wi=1",
          imageAlt: "Culinary excellence",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-table-private-room-with-fireplace-wooden-ceilings-brick-walls_140725-8458.jpg?_wi=1",
          imageAlt: "Table setting",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-containing-mixed-ingredients-blue-ceramic-plate_114579-1997.jpg?_wi=1",
          imageAlt: "Gourmet prep",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/beverage-topped-with-fried-orange-slice_141793-1125.jpg?_wi=1",
          imageAlt: "Elegant decor",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-friends-night-having-dinner_23-2149190934.jpg?_wi=1",
          imageAlt: "Artistic dish",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/dining-table-with-chairs-tableware_140725-7822.jpg",
          imageAlt: "Fine dining atmosphere",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Our Culinary Legacy"
      metrics={[
        {
          icon: Briefcase,
          label: "Years of Tradition",
          value: "20+",
        },
        {
          icon: Award,
          label: "Culinary Awards",
          value: "15",
        },
        {
          icon: Smile,
          label: "Satisfied Guests",
          value: "50k+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Filet Mignon",
          price: "$45",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-yummy-creamy-cake-with-strawberries_140725-57114.jpg",
        },
        {
          id: "p2",
          name: "Truffle Pasta",
          price: "$38",
          imageSrc: "http://img.b2bpic.net/free-photo/alfredo-fettuccine-with-mushroom-grated-parmesan-cherry-tomato_140725-6482.jpg",
        },
        {
          id: "p3",
          name: "Sea Bass",
          price: "$42",
          imageSrc: "http://img.b2bpic.net/free-photo/tuna-sushi_1203-3743.jpg",
        },
        {
          id: "p4",
          name: "Lobster Bisque",
          price: "$28",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-cooked-sea-food_23-2149409235.jpg",
        },
        {
          id: "p5",
          name: "Classic Tiramisu",
          price: "$18",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-yummy-creamy-cake-with-cup-tea-light-background-sweet-candy-biscuit_140725-47032.jpg",
        },
        {
          id: "p6",
          name: "Ribeye Steak",
          price: "$52",
          imageSrc: "http://img.b2bpic.net/free-photo/perfectly-grilled-steak-with-herbs-spices_84443-72270.jpg",
        },
      ]}
      title="Signature Specialties"
      description="Discover our hand-crafted menu inspired by tradition."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Signature",
          price: "$95",
          subtitle: "A journey through our core flavors",
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
          features: [
            "5 Courses",
            "Wine Pairing Option",
            "Priority Seating",
          ],
        },
        {
          id: "pro",
          badge: "Grand",
          price: "$150",
          subtitle: "Our ultimate culinary showcase",
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
          features: [
            "9 Courses",
            "Sommelier Selection",
            "Chef Interaction",
            "VIP Welcome",
          ],
        },
      ]}
      title="Tasting Menus"
      description="Experience the full depth of Sergio's kitchen."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "100%",
          title: "Fresh Ingredients",
          items: [
            "Locally sourced",
            "Seasonal produce",
            "Farm-to-table",
          ],
        },
        {
          id: "m2",
          value: "4.9",
          title: "Guest Rating",
          items: [
            "Over 5k reviews",
            "Top-rated service",
            "Exceptional quality",
          ],
        },
        {
          id: "m3",
          value: "12",
          title: "Wine Regions",
          items: [
            "Hand-picked bottles",
            "Global selections",
            "Expert curation",
          ],
        },
      ]}
      title="By The Numbers"
      description="The foundation of our culinary excellence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          date: "Oct 2023",
          title: "Perfection",
          quote: "A truly magical evening. Every dish was a masterpiece.",
          tag: "Regular",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-people-spending-time-together_23-2149152906.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-wood-chair_1339-6717.jpg?_wi=2",
          imageAlt: "happy customer dining",
        },
        {
          id: "2",
          name: "James Cook",
          date: "Sep 2023",
          title: "Amazing",
          quote: "The wine pairing elevated the dinner to another level.",
          tag: "Foodie",
          avatarSrc: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517424.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-table-private-room-with-fireplace-wooden-ceilings-brick-walls_140725-8458.jpg?_wi=2",
          imageAlt: "happy customer dining",
        },
        {
          id: "3",
          name: "Elena Rossi",
          date: "Aug 2023",
          title: "Exquisite",
          quote: "The ambiance is perfect for a special celebration.",
          tag: "VIP",
          avatarSrc: "http://img.b2bpic.net/free-photo/people-cheering-with-wine-glasses-luxurious-restaurant_23-2150517422.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-containing-mixed-ingredients-blue-ceramic-plate_114579-1997.jpg?_wi=2",
          imageAlt: "happy customer dining",
        },
        {
          id: "4",
          name: "Mark Wilson",
          date: "Jul 2023",
          title: "Highlight",
          quote: "Best steak I've had in years. Unbeatable.",
          tag: "Returning",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-discussing-with-waiter-who-is-serving-her-food-pub_637285-6627.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/beverage-topped-with-fried-orange-slice_141793-1125.jpg?_wi=2",
          imageAlt: "happy customer dining",
        },
        {
          id: "5",
          name: "Alice Green",
          date: "Jun 2023",
          title: "Top tier",
          quote: "Simply the best fine dining in the city.",
          tag: "Connoisseur",
          avatarSrc: "http://img.b2bpic.net/free-photo/girl-sitting-table-holding-mobile-phone-indoors_171337-17096.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-friends-night-having-dinner_23-2149190934.jpg?_wi=2",
          imageAlt: "happy customer dining",
        },
      ]}
      title="Guest Reflections"
      description="Hear what our patrons are saying."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do I need a reservation?",
          content: "Reservations are highly recommended, especially for weekends.",
        },
        {
          id: "f2",
          title: "Is there a dress code?",
          content: "Business casual is our standard. Look your best!",
        },
        {
          id: "f3",
          title: "Can you handle allergies?",
          content: "Please notify our team when booking and we will accommodate.",
        },
      ]}
      title="Frequently Asked"
      description="Everything you need to know before visiting."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Reserve Your Experience"
      description="Join our newsletter for updates or contact us directly for private dining inquiries."
      imageSrc="http://img.b2bpic.net/free-photo/elegant-beautiful-woman-sitting-vintage-cafe-black-velvet-dress-evening-gown-rich-stylish-lady-elegant-fashion-trend-sexy-seductive-look-attractive-skinny-figure_285396-7236.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Fastuosa de Sergio's"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Contact Us",
        href: "#contact",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
