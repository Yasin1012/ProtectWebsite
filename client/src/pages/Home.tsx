import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { LogoCarousel } from "@/components/sections/LogoCarousel";
import { StatsSection } from "@/components/sections/StatsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <LogoCarousel />
      <ServicesOverview />
      <StatsSection />
      <TrustSection />
      <CTASection />
    </Layout>
  );
}
