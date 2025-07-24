import { Leaf, Award, Users } from 'lucide-react';
import craftsmanshipImage from '@/assets/craftsmanship.jpg';

const Sustainability = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: 'Ethical Sourcing',
      description: 'All our leather is sourced from certified suppliers who follow strict environmental and ethical standards.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Master Craftsmanship',
      description: 'Each piece is handcrafted by skilled artisans using techniques passed down through generations.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Fair Trade',
      description: 'We ensure fair wages and safe working conditions for all craftspeople in our supply chain.'
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6 font-heading">
              Sustainability & Craftsmanship
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              At Zulu Treasure, we believe luxury should never come at the expense of our planet 
              or its people. Every piece in our collection represents our commitment to sustainable 
              practices and exceptional craftsmanship.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-secondary/20 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-2 font-heading">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={craftsmanshipImage}
              alt="Artisan crafting leather goods"
              className="w-full h-[500px] object-cover rounded-2xl shadow-premium"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;