-- Update products with new leather goods data
UPDATE products SET 
  name = 'Premium Leather Card Holder',
  description = 'Handcrafted card holder with multiple card slots and premium leather construction. Features our signature Zulu Treasure embossing.',
  price = 45.00,
  materials = 'Premium full-grain leather, hand-stitched',
  dimensions = '10cm x 7cm x 1cm',
  image_url = '/lovable-uploads/2be4fa2d-b912-4d17-8a08-a02ef01c5510.png',
  images = jsonb_build_array(
    '/lovable-uploads/2be4fa2d-b912-4d17-8a08-a02ef01c5510.png',
    '/lovable-uploads/2a9ed0ef-d165-4828-a8e4-2f6aee25be97.png'
  ),
  features = jsonb_build_array(
    'Multiple card slots',
    'Premium leather construction', 
    'Hand-stitched edges',
    'Zulu Treasure embossing',
    'Compact design'
  )
WHERE slug = 'premium-wallet';

UPDATE products SET 
  name = 'Signature Leather Wallet',
  description = 'Full-size leather wallet with multiple compartments, card slots, and bill storage. Crafted from premium leather with meticulous attention to detail.',
  price = 85.00,
  materials = 'Premium full-grain leather, brass hardware',
  dimensions = '19cm x 10cm x 2cm',
  image_url = '/lovable-uploads/d5ca100a-9fcc-48d0-84d1-c05d54d523e6.png',
  images = jsonb_build_array(
    '/lovable-uploads/d5ca100a-9fcc-48d0-84d1-c05d54d523e6.png',
    '/lovable-uploads/d26f2477-928a-4e71-83af-9ed665ebfe23.png',
    '/lovable-uploads/d90c5096-4e58-4562-94e6-9b390eeabd19.png'
  ),
  features = jsonb_build_array(
    'Multiple card slots',
    'Bill compartment',
    'Coin pocket with snap closure',
    'Premium leather construction',
    'Hand-stitched details'
  )
WHERE slug = 'classic-briefcase';

-- Insert new color variants
INSERT INTO products (name, slug, description, price, materials, dimensions, image_url, images, features, featured, in_stock) VALUES
(
  'Premium Leather Card Holder - Black',
  'card-holder-black',
  'Sleek black leather card holder with minimalist design. Features multiple card slots and our signature embossed logo.',
  45.00,
  'Premium full-grain black leather, hand-stitched',
  '10cm x 7cm x 1cm',
  '/lovable-uploads/dbaf6dc3-c686-4d03-85cf-1c2ffab97ae7.png',
  jsonb_build_array(
    '/lovable-uploads/dbaf6dc3-c686-4d03-85cf-1c2ffab97ae7.png'
  ),
  jsonb_build_array(
    'Multiple card slots',
    'Premium black leather',
    'Minimalist design',
    'Hand-stitched edges',
    'Embossed logo'
  ),
  true,
  true
),
(
  'Signature Leather Wallet - Brown',
  'wallet-brown',
  'Classic brown leather wallet with traditional craftsmanship. Features multiple compartments and premium construction.',
  85.00,
  'Premium full-grain brown leather, brass hardware',
  '19cm x 10cm x 2cm',
  '/lovable-uploads/cdcbdad0-1057-421b-88c4-a3267cfa2c9a.png',
  jsonb_build_array(
    '/lovable-uploads/cdcbdad0-1057-421b-88c4-a3267cfa2c9a.png',
    '/lovable-uploads/6665fdf9-1c7b-4150-93d2-b978f6bec1a8.png',
    '/lovable-uploads/7b27f926-7bf8-4b7d-8422-8fccba852216.png',
    '/lovable-uploads/990e9aa2-4022-4229-bdf7-b04eb2b1f3ff.png'
  ),
  jsonb_build_array(
    'Multiple card slots',
    'Bill compartment',
    'Coin pocket with snap closure',
    'Premium brown leather',
    'Traditional craftsmanship'
  ),
  true,
  true
);