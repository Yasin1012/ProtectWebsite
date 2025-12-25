import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServicesOverview />
      <TrustSection />
      <CTASection />
    </Layout>
  );
}
