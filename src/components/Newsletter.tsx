import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary-foreground/10 rounded-full">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
          Join for Exclusive Offers
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Be the first to know about new collections, limited editions, and special promotions. 
          Plus, get 10% off your first order.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60"
            />
            <Button 
              type="submit"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8"
            >
              Subscribe
            </Button>
          </div>
        </form>

        <p className="text-sm text-primary-foreground/70 mt-4">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;