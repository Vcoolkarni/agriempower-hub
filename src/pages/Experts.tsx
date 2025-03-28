
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Experts = () => {
  // Placeholder data for experts
  const experts = [
    {
      id: 1,
      name: "Dr. Ravindra Singh",
      specialty: "Crop Science",
      experience: "15+ years",
      rating: 4.8,
      qualification: "Ph.D. in Agricultural Sciences",
      image: "https://placehold.co/150x150/f5e6c3/907024?text=RS",
      type: "agronomist"
    },
    {
      id: 2,
      name: "Anita Patel",
      specialty: "Organic Farming",
      experience: "12+ years",
      rating: 4.9,
      qualification: "MSc in Organic Agriculture",
      image: "https://placehold.co/150x150/f5e6c3/907024?text=AP",
      type: "agronomist"
    },
    {
      id: 3,
      name: "Vivek Sharma",
      specialty: "Water Management",
      experience: "8+ years",
      rating: 4.5,
      qualification: "BSc Agriculture",
      image: "https://placehold.co/150x150/f5e6c3/907024?text=VS",
      type: "student"
    },
    {
      id: 4,
      name: "Pradeep Kumar",
      specialty: "Rice Cultivation",
      experience: "20+ years",
      rating: 4.7,
      qualification: "Experienced Farmer",
      image: "https://placehold.co/150x150/f5e6c3/907024?text=PK",
      type: "farmer"
    },
    {
      id: 5,
      name: "Meena Kumari",
      specialty: "Pest Management",
      experience: "10+ years",
      rating: 4.6,
      qualification: "BSc Agriculture",
      image: "https://placehold.co/150x150/f5e6c3/907024?text=MK",
      type: "student"
    },
    {
      id: 6,
      name: "Gurpreet Singh",
      specialty: "Wheat Cultivation",
      experience: "25+ years",
      rating: 4.9,
      qualification: "Experienced Farmer",
      image: "https://placehold.co/150x150/f5e6c3/907024?text=GS",
      type: "farmer"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-agri-dark text-white py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Agricultural Expert Connect</h1>
            <p className="text-agri-cream max-w-2xl">
              Get personalized advice from agricultural experts, BSc Agriculture students, and experienced farmers.
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <div className="bg-agri-cream/30 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-agri-dark mb-4">Ask a Question</h2>
              <p className="text-agri-bark mb-4">
                Have a farming question? Get answers from our expert community.
              </p>
              <div className="flex gap-4">
                <Button className="bg-agri-gold hover:bg-agri-brown text-white">
                  Post a Question
                </Button>
                <Button variant="outline" className="border-agri-gold text-agri-gold hover:bg-agri-gold hover:text-white">
                  Book a Consultation
                </Button>
              </div>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agri-bark" />
              <Input
                placeholder="Search for experts by name or specialty..."
                className="pl-10 border-agri-gold/30 focus:border-agri-gold"
              />
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-agri-cream/30">
                <TabsTrigger value="all">All Experts</TabsTrigger>
                <TabsTrigger value="agronomist">Agronomists</TabsTrigger>
                <TabsTrigger value="student">BSc Agriculture Students</TabsTrigger>
                <TabsTrigger value="farmer">Experienced Farmers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {experts.map((expert) => (
                    <Card key={expert.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-agri-gold/20">
                      <CardContent className="p-0">
                        <div className="flex flex-col items-center p-6 bg-agri-cream/20">
                          <img 
                            src={expert.image} 
                            alt={expert.name} 
                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                          />
                          <h3 className="text-xl font-semibold text-agri-dark mt-4">{expert.name}</h3>
                          <p className="text-agri-bark font-medium">{expert.specialty}</p>
                          <div className="flex items-center mt-1 text-agri-gold">
                            <span className="font-bold mr-1">{expert.rating}</span>
                            <span>★</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="mb-3">
                            <span className="text-sm text-agri-bark">Experience:</span>
                            <span className="text-sm font-medium text-agri-dark ml-2">{expert.experience}</span>
                          </div>
                          <div className="mb-4">
                            <span className="text-sm text-agri-bark">Qualification:</span>
                            <span className="text-sm font-medium text-agri-dark ml-2">{expert.qualification}</span>
                          </div>
                          <Button className="w-full bg-agri-gold hover:bg-agri-brown text-white">
                            View Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="agronomist" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {experts
                    .filter((expert) => expert.type === "agronomist")
                    .map((expert) => (
                      <Card key={expert.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-agri-gold/20">
                        <CardContent className="p-0">
                          <div className="flex flex-col items-center p-6 bg-agri-cream/20">
                            <img 
                              src={expert.image} 
                              alt={expert.name} 
                              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                            />
                            <h3 className="text-xl font-semibold text-agri-dark mt-4">{expert.name}</h3>
                            <p className="text-agri-bark font-medium">{expert.specialty}</p>
                            <div className="flex items-center mt-1 text-agri-gold">
                              <span className="font-bold mr-1">{expert.rating}</span>
                              <span>★</span>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="mb-3">
                              <span className="text-sm text-agri-bark">Experience:</span>
                              <span className="text-sm font-medium text-agri-dark ml-2">{expert.experience}</span>
                            </div>
                            <div className="mb-4">
                              <span className="text-sm text-agri-bark">Qualification:</span>
                              <span className="text-sm font-medium text-agri-dark ml-2">{expert.qualification}</span>
                            </div>
                            <Button className="w-full bg-agri-gold hover:bg-agri-brown text-white">
                              View Profile
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="student" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {experts
                    .filter((expert) => expert.type === "student")
                    .map((expert) => (
                      <Card key={expert.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-agri-gold/20">
                        <CardContent className="p-0">
                          <div className="flex flex-col items-center p-6 bg-agri-cream/20">
                            <img 
                              src={expert.image} 
                              alt={expert.name} 
                              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                            />
                            <h3 className="text-xl font-semibold text-agri-dark mt-4">{expert.name}</h3>
                            <p className="text-agri-bark font-medium">{expert.specialty}</p>
                            <div className="flex items-center mt-1 text-agri-gold">
                              <span className="font-bold mr-1">{expert.rating}</span>
                              <span>★</span>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="mb-3">
                              <span className="text-sm text-agri-bark">Experience:</span>
                              <span className="text-sm font-medium text-agri-dark ml-2">{expert.experience}</span>
                            </div>
                            <div className="mb-4">
                              <span className="text-sm text-agri-bark">Qualification:</span>
                              <span className="text-sm font-medium text-agri-dark ml-2">{expert.qualification}</span>
                            </div>
                            <Button className="w-full bg-agri-gold hover:bg-agri-brown text-white">
                              View Profile
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="farmer" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {experts
                    .filter((expert) => expert.type === "farmer")
                    .map((expert) => (
                      <Card key={expert.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-agri-gold/20">
                        <CardContent className="p-0">
                          <div className="flex flex-col items-center p-6 bg-agri-cream/20">
                            <img 
                              src={expert.image} 
                              alt={expert.name} 
                              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                            />
                            <h3 className="text-xl font-semibold text-agri-dark mt-4">{expert.name}</h3>
                            <p className="text-agri-bark font-medium">{expert.specialty}</p>
                            <div className="flex items-center mt-1 text-agri-gold">
                              <span className="font-bold mr-1">{expert.rating}</span>
                              <span>★</span>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="mb-3">
                              <span className="text-sm text-agri-bark">Experience:</span>
                              <span className="text-sm font-medium text-agri-dark ml-2">{expert.experience}</span>
                            </div>
                            <div className="mb-4">
                              <span className="text-sm text-agri-bark">Qualification:</span>
                              <span className="text-sm font-medium text-agri-dark ml-2">{expert.qualification}</span>
                            </div>
                            <Button className="w-full bg-agri-gold hover:bg-agri-brown text-white">
                              View Profile
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Experts;
