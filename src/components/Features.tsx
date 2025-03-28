
import FeatureCard from "./FeatureCard";
import { ShoppingCart, FileText, Users } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 bg-agri-cream/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto inline-block">Our Core Features</h2>
          <div className="h-1 w-24 bg-agri-bright mx-auto mt-2 mb-6"></div>
          <p className="text-agri-bark max-w-2xl mx-auto text-lg">
            AgriEmpower provides farmers with comprehensive tools and resources to enhance their agricultural operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Equipment Marketplace"
            description="Buy and sell agricultural machinery and tools from verified vendors with secure transactions."
            icon={ShoppingCart}
            linkTo="/marketplace"
            color="bg-agri-gold"
          />
          <FeatureCard
            title="Government Scheme Navigator"
            description="Discover and apply for agricultural subsidies, loans, and schemes you're eligible for."
            icon={FileText}
            linkTo="/schemes"
            color="bg-agri-moss"
          />
          <FeatureCard
            title="Expert Connect"
            description="Consult with agricultural experts, BSc Agriculture students, and experienced farmers."
            icon={Users}
            linkTo="/experts"
            color="bg-agri-brown"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
