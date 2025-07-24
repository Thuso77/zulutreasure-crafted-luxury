import { Heart, Target, Globe } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      number: '10%',
      label: 'of profits donated',
      description: 'Supporting community programs'
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      number: '5,000+',
      label: 'artisans supported',
      description: 'Across our partner communities'
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      number: '100%',
      label: 'carbon neutral',
      description: 'Shipping and packaging'
    }
  ];

  return (
    <section className="py-20 bg-secondary/10" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6 font-heading">
            Our Impact
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            When you choose Zulu Treasure, you're not just buying a premium product – 
            you're supporting sustainable livelihoods and positive change in communities around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-smooth">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 font-heading">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-foreground/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4 font-heading">
            Building Stronger Communities
          </h3>
          <p className="text-lg text-foreground/80 mb-6 max-w-4xl mx-auto">
            Through our community investment program, we partner with local organizations 
            to provide education, healthcare, and economic opportunities. Every purchase 
            directly contributes to sustainable development initiatives.
          </p>
          <div className="inline-block bg-primary/10 px-6 py-3 rounded-full">
            <span className="text-primary font-semibold">
              10% of all profits donated to community programs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;