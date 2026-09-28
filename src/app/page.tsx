import Hero from '@/components/sections/hero';
import LogoCloud from '@/components/sections/logo-cloud';
import Categories from '@/components/sections/categories';
import WhyUs from '@/components/sections/why-us';
import RoiCalculator from '@/components/sections/roi-calculator';
import CtaBanner from '@/components/sections/cta-banner';
import Cases from '@/components/sections/cases';
import Exclusive from '@/components/sections/exclusive';
import Steps from '@/components/sections/steps';
import Testimonials from '@/components/sections/testimonials';
import FAQ from '@/components/sections/faq';
import FinalCta from '@/components/sections/final-cta';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <LogoCloud />
      <Categories />
      <WhyUs />
      <RoiCalculator />
      <CtaBanner />
      <Cases />
      <Exclusive />
      <Steps />
      <Testimonials />
      <FAQ />
      <FinalCta />
    </main>
  );
}
