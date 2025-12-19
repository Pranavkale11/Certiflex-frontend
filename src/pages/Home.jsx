import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Paths from "../components/Paths";
import Enemies from "../components/Enemies";
import Superpowers from "../components/Superpowers";
import Testimonial from "../components/Testimonial";
import Reviews from "../components/Reviews";
import Pricing from "../components/Pricing.jsx"; // 👈 IMPORTANT
import Faq from "../components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Paths />
      <Enemies />
      <Testimonial />
      <Superpowers />
      <Reviews />
      <Pricing />
      <Faq />

    </>
  );
}
