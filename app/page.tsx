import LandingHero from "./appcomponents/LandingHero";
import { NavigateSection } from "./appcomponents/NavigateSection";
import ComprehensiveSection from "./appcomponents/ComprehensiveSection";
import AboutSection from "./appcomponents/AboutSection";
import AISection from "./appcomponents/AISection";
import ContactSection from "./appcomponents/ContactSection";
import LandingHeader from "./appcomponents/LandingHeader";

export default function Home() {
  return (
    <div className="w-full py-[32px] max-w-[1156px] mx-auto">
      <LandingHeader/>
      <LandingHero/>
      <NavigateSection/>
      <ComprehensiveSection/>
      <AboutSection/>
      <AISection/>
      <ContactSection/>
    </div>  
  );
}
