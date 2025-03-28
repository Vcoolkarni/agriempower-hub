
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter, ArrowUpDown } from "lucide-react";

const Marketplace = () => {
  // Placeholder data for equipment items
  const equipmentItems = [
    {
      id: 1,
      name: "John Deere Tractor",
      price: "₹1,200,000",
      condition: "Used - Good",
      location: "Punjab",
      image: "https://placehold.co/300x200/f5e6c3/907024?text=Tractor"
    },
    {
      id: 2,
      name: "Irrigation System",
      price: "₹45,000",
      condition: "New",
      location: "Gujarat",
      image: "https://placehold.co/300x200/f5e6c3/907024?text=Irrigation"
    },
    {
      id: 3,
      name: "Harvesting Machine",
      price: "₹800,000",
      condition: "Used - Excellent",
      location: "Haryana",
      image: "https://placehold.co/300x200/f5e6c3/907024?text=Harvester"
    },
    {
      id: 4,
      name: "Rotavator",
      price: "₹120,000",
      condition: "New",
      location: "Uttar Pradesh",
      image: "https://placehold.co/300x200/f5e6c3/907024?text=Rotavator"
    },
    {
      id: 5,
      name: "Spraying Equipment",
      price: "₹25,000",
      condition: "Used - Good",
      location: "Maharashtra",
      image: "https://placehold.co/300x200/f5e6c3/907024?text=Sprayer"
    },
    {
      id: 6,
      name: "Water Pump",
      price: "₹18,000",
      condition: "New",
      location: "Tamil Nadu",
      image: "https://placehold.co/300x200/f5e6c3/907024?text=Pump"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-agri-dark text-white py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Equipment Marketplace</h1>
            <p className="text-agri-cream max-w-2xl">
              Browse and purchase quality agricultural equipment from verified vendors across India.
            </p>
          </div>
        </section>

        <section className="py-8 bg-agri-cream/20">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agri-bark" />
                <Input
                  placeholder="Search for equipment..."
                  className="pl-10 border-agri-gold/30 focus:border-agri-gold"
                />
              </div>
              <Button variant="outline" className="border-agri-gold text-agri-gold">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
              <Button variant="outline" className="border-agri-gold text-agri-gold">
                <ArrowUpDown className="mr-2 h-4 w-4" /> Sort
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipmentItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold text-agri-dark mb-2">{item.name}</h3>
                    <p className="text-agri-gold font-bold mb-1">{item.price}</p>
                    <p className="text-sm text-agri-bark mb-1">Condition: {item.condition}</p>
                    <p className="text-sm text-agri-bark mb-3">Location: {item.location}</p>
                    <Button className="w-full bg-agri-gold hover:bg-agri-brown text-white">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
