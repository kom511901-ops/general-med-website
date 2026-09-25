import Hero from '@/components/sections/hero';
import LogoCloud from '@/components/sections/logo-cloud';
import Categories from '@/components/sections/categories';
import WhyUs from '@/components/sections/why-us';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <LogoCloud />
      <Categories />
      <WhyUs />
    </main>
  );
}
