import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Sustainability from '@/components/Sustainability';
import Impact from '@/components/Impact';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <Sustainability />
      <Impact />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
