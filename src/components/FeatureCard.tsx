
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  linkTo: string;
  color: string;
}

const FeatureCard = ({ title, description, icon: Icon, linkTo, color }: FeatureCardProps) => {
  return (
    <div className="feature-card group">
      <div className={`w-14 h-14 mb-4 rounded-lg flex items-center justify-center ${color}`}>
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-agri-dark">{title}</h3>
      <p className="text-agri-bark mb-5">{description}</p>
      <Button asChild variant="outline" className="border-agri-gold text-agri-gold hover:bg-agri-gold hover:text-white">
        <Link to={linkTo}>
          Explore Now
        </Link>
      </Button>
    </div>
  );
};

export default FeatureCard;
