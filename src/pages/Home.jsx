// pages/Home.jsx
import FounderTestimonials from "../components/HomePageSections/FounderTestimonials";
import InvestmentFAQ from "../components/HomePageSections/InvestmentFAQ";
import InsightsSection from "../components/HomePageSections/InsightsSection";
import Landing from "../components/HomePageSections/Landing";
import BlackBanner from "../components/other/BlackBanner";
import LuxHero from "../components/other/LuxHero";
import Conviction from "../components/other/Conviction";
import OverlaySection from "../components/other/OverlaySection";
import ExpertiseBuild from "../components/other/ExpertiseBuild";
import AtlasSection2 from "../components/ui/AtlasSection2";
import AtlasSection1 from "../components/ui/AtlasSection1";

export function Home() {
  return (
    <div className="relative max-w-[1500px] mx-auto">
      <section className="sticky -top-60 z-10 h-[150vh]">
        <Landing />
      </section>

      <section className="relative z-20">
        <BlackBanner />
      </section>

      <div className="relative z-30 bg-white">
        <ExpertiseBuild />
        <LuxHero />
        <Conviction />
        <AtlasSection1/>
        <AtlasSection2 />
        {/* <FounderTestimonials /> */}
        <InvestmentFAQ />
        <InsightsSection />
      </div>
    </div>
  );
}


export default Home;