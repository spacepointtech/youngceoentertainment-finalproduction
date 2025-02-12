import Footer from '@/components/FooterPage';
import Home from '@/components/HomePage';
import Platform from '@/components/PlatformPage';
import Pricing from '@/components/PricingPage';
// import Third from '@/components/ThirdSection';
export default function HomePage() {
  return (
    <>
      <Home />
      <Platform /> 
      {/* <Third /> */}
      <Pricing />
      <Footer />
  
    
    </>
  );
}

