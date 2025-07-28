import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import walletImage from '@/assets/product-wallet.jpg';
import briefcaseImage from '@/assets/product-briefcase.jpg';
import crossbodyImage from '@/assets/product-crossbody.jpg';
import toteImage from '@/assets/product-tote.jpg';

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  
  const products = [
    {
      id: '1',
      name: 'Artisan Wallet Collection',
      price: 1590,
      priceDisplay: 'R1,590',
      image: walletImage,
      description: 'Handcrafted leather wallets with RFID protection'
    },
    {
      id: '2',
      name: 'Executive Briefcase',
      price: 6290,
      priceDisplay: 'R6,290',
      image: briefcaseImage,
      description: 'Premium leather briefcase for professionals'
    },
    {
      id: '3',
      name: 'Heritage Crossbody',
      price: 3390,
      priceDisplay: 'R3,390',
      image: crossbodyImage,
      description: 'Versatile crossbody bag for everyday elegance'
    },
    {
      id: '4',
      name: 'Classic Tote',
      price: 4690,
      priceDisplay: 'R4,690',
      image: toteImage,
      description: 'Spacious tote bag perfect for work and travel'
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 font-heading">
            Featured Collections
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover our signature pieces, each one telling a story of craftsmanship and heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover-lift border-0 shadow-card card-gradient overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-accent mb-2 font-heading">
                  {product.name}
                </h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent">
                    {product.priceDisplay}
                  </span>
                  <Button 
                    size="sm" 
                    className="btn-primary opacity-0 group-hover:opacity-100 transition-smooth"
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image_url: product.image
                    })}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="btn-secondary">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;