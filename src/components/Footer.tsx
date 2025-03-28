
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-agri-dark text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-agri-bright">AgriEmpower</h3>
            <p className="text-agri-cream mb-4">
              Empowering farmers with tools for equipment trading, government scheme discovery, and agricultural expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-agri-pale hover:text-agri-bright transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-agri-pale hover:text-agri-bright transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-agri-pale hover:text-agri-bright transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-agri-bright">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-agri-cream hover:text-agri-bright transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-agri-cream hover:text-agri-bright transition-colors">
                  Equipment Marketplace
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="text-agri-cream hover:text-agri-bright transition-colors">
                  Government Schemes
                </Link>
              </li>
              <li>
                <Link to="/experts" className="text-agri-cream hover:text-agri-bright transition-colors">
                  Expert Connect
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-agri-cream hover:text-agri-bright transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-agri-bright">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace" className="text-agri-cream hover:text-agri-bright transition-colors">
                  Buy Equipment
                </Link>
              </li>
              <li>
                <Link to="/marketplace/sell" className="text-agri-cream hover:text-agri-bright transition-colors">
                  Sell Equipment
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="text-agri-cream hover:text-agri-bright transition-colors">
                  Check Scheme Eligibility
                </Link>
              </li>
              <li>
                <Link to="/experts" className="text-agri-cream hover:text-agri-bright transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-agri-bright">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-agri-bright mt-1 flex-shrink-0" />
                <span className="text-agri-cream">123 Agriculture Road, Farming District, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-agri-bright flex-shrink-0" />
                <span className="text-agri-cream">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-agri-bright flex-shrink-0" />
                <span className="text-agri-cream">info@agriempower.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-agri-forest/30 mt-8 pt-6 text-center text-sm text-agri-pale">
          <p>&copy; {new Date().getFullYear()} AgriEmpower. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
