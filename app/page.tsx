import HeroSection from "@/components/home/hero-section";
import BgGradient from "@/components/ui/common/bg-gradient";
import DemoSection from "@/components/ui/common/demo-section";
import HowItWorksSection from "@/components/ui/common/how-it-works";
export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
      </div>
      {/* <DemoSection />
    <HowItWorksSection />
    <PricingSection />
    <CTASection /> */}
    </div>
  );
}
