import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['featured-products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('featured', true)
        .eq('in_stock', true);
      
      if (error) {
        toast.error('Failed to load products');
        throw error;
      }
      
      return data;
    }
  });

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
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="overflow-hidden animate-pulse">
                <div className="h-64 bg-muted"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-8 bg-muted rounded w-20"></div>
                    <div className="h-8 bg-muted rounded w-20"></div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            products.map((product) => (
              <Card 
                key={product.id} 
                className="group hover-lift border-0 shadow-card card-gradient overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image_url || '/placeholder.svg'}
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
                      ${Number(product.price).toFixed(2)}
                    </span>
                    <Button 
                      size="sm" 
                      className="btn-primary opacity-0 group-hover:opacity-100 transition-smooth"
                      onClick={() => {
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: Number(product.price),
                          image_url: product.image_url || '/placeholder.svg'
                        });
                        toast.success(`${product.name} added to cart!`);
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
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