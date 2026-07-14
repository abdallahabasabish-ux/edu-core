import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Stats } from "@/components/sections/Stats";
import { Screenshots } from "@/components/sections/Screenshots";
import { Pricing } from "@/components/sections/Pricing";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <HowItWorks />
      <Stats />
      <Screenshots />
      <Pricing />
      <Comparison />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
