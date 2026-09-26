import Hero from '@/components/sections/hero';
import LogoCloud from '@/components/sections/logo-cloud';
import Categories from '@/components/sections/categories';
import WhyUs from '@/components/sections/why-us';
import RoiCalculator from '@/components/sections/roi-calculator';
import Cases from '@/components/sections/cases';
import Exclusive from '@/components/sections/exclusive';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <LogoCloud />
      <Categories />
      <WhyUs />
      <RoiCalculator />
      <Cases />
      <Exclusive />
    </main>
  );
}
