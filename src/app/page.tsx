import Navbar from '@/components/Navbar';
import HeroAbout from '@/components/HeroAbout';
import CaseStudy from '@/components/CaseStudy';
import BenefitsOfChoosing from '@/components/BenefitsOfChoosing';
import WhyChooseUs from '@/components/WhyChooseUs';
import IndustriesTechStackClients from '@/components/IndustriesTechStackClients';
import ReadyToGetStarted from '@/components/ReadyToGetStarted';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero component */}
        <HeroAbout />
        
        {/* 2. Bespoke software development component (part of HeroAbout - About section) */}
        
        {/* 3. Case studies section */}
        <CaseStudy />
        
        {/* 4. Benefits of choosing our custom component */}
        <BenefitsOfChoosing />
        
        {/* 5. Why choose us component */}
        <WhyChooseUs />
        
        {/* 6. Industries we serve component */}
        {/* 7. Our tech stack component */}
        {/* 8. See what our client component */}
        <IndustriesTechStackClients />
        
        {/* 9. Ready to get started component */}
        {/* 10. An essential guide component */}
        {/* 11. Engagement models */}
        <ReadyToGetStarted />
        
        {/* 12. We got the answers -> Footer section */}
        <Footer />
      </main>
    </>
  );
}
