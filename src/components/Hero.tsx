import { Button } from '@/components/ui/button';
import heroImage from '/lovable-uploads/cce4c17e-6233-4b64-9575-b83469468b90.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Zulu Treasure canvas and leather tote bag"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 font-heading">
          Crafted with
          <span className="block text-secondary">Purpose</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Premium leather goods handcrafted by skilled artisans, sourced ethically, and designed to last generations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-primary text-lg px-12 py-4 bg-primary hover:bg-primary/90"
          >
            Shop Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-12 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Our Story
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;