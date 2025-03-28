
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section relative py-20 md:py-28 lg:py-36 text-white">
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-agri-pale">
            Empowering Farmers Through Technology
          </h1>
          <p className="text-xl mb-8 text-agri-cream">
            Access equipment, discover government schemes, and connect with experts – all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-agri-gold hover:bg-agri-brown text-white text-lg py-6 px-8">
              Get Started
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
