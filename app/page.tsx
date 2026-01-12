import Hero from '@/components/sections/Hero';
import FeaturedWork from '@/components/sections/FeaturedWork';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import Space from '@/components/sections/Space';
import Space2 from '@/components/sections/Space2';
import Space3 from '@/components/sections/Space3';

const Page = () => {
  return (
    <div className='min-h-screen bg-black text-white overflow-x-hidden'>
      <Hero />
      <FeaturedWork />
      <About />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <FAQ />
      <CTA />
      <Space />
      <Space2 />
      <Space3 />
      <Footer />
    </div>
  );
};

export default Page;
