
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-agri-brown">
            Agri<span className="text-agri-gold">Empower</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="nav-link font-medium">Home</Link>
          <Link to="/marketplace" className="nav-link font-medium">Marketplace</Link>
          <Link to="/schemes" className="nav-link font-medium">Govt Schemes</Link>
          <Link to="/experts" className="nav-link font-medium">Expert Connect</Link>
          <Link to="/about" className="nav-link font-medium">About Us</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-agri-gold text-agri-gold hover:bg-agri-gold hover:text-white">
            Login
          </Button>
          <Button className="bg-agri-gold text-white hover:bg-agri-brown">
            Sign Up
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2 text-agri-dark" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <Link to="/" className="nav-link font-medium py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/marketplace" className="nav-link font-medium py-2" onClick={() => setIsOpen(false)}>Marketplace</Link>
            <Link to="/schemes" className="nav-link font-medium py-2" onClick={() => setIsOpen(false)}>Govt Schemes</Link>
            <Link to="/experts" className="nav-link font-medium py-2" onClick={() => setIsOpen(false)}>Expert Connect</Link>
            <Link to="/about" className="nav-link font-medium py-2" onClick={() => setIsOpen(false)}>About Us</Link>
            
            <div className="flex gap-4 mt-2">
              <Button variant="outline" className="border-agri-gold text-agri-gold hover:bg-agri-gold hover:text-white w-full">
                Login
              </Button>
              <Button className="bg-agri-gold text-white hover:bg-agri-brown w-full">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
