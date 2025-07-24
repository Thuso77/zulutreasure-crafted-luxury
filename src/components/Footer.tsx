import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'All Products', href: '#' },
        { name: 'Bags', href: '#' },
        { name: 'Wallets', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Gift Cards', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Our Story', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Impact', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Customer Service', href: '#' },
        { name: 'Size Guide', href: '#' },
        { name: 'Shipping & Returns', href: '#' },
        { name: 'Care Instructions', href: '#' },
        { name: 'FAQ', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-heading">Zulu Treasure</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Crafting premium leather goods with purpose, supporting artisan communities, 
              and building a sustainable future one piece at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-sm">hello@zulutreasure.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm">Cape Town, South Africa</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4 font-heading">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-sm text-primary-foreground/80">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary/20 transition-smooth"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-primary-foreground/80 hover:text-secondary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/80 hover:text-secondary transition-smooth">
                Terms of Service
              </a>
              <span className="text-sm text-primary-foreground/60">
                © 2024 Zulu Treasure. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;