
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Schemes = () => {
  // Placeholder data for government schemes
  const schemes = [
    {
      id: 1,
      name: "Pradhan Mantri Fasal Bima Yojana",
      ministry: "Ministry of Agriculture & Farmers Welfare",
      description: "Provides financial support to farmers suffering crop loss/damage arising out of unforeseen events.",
      eligibility: "All farmers including sharecroppers and tenant farmers growing notified crops in notified areas.",
      benefits: "Insurance coverage and financial support to farmers in case of crop failure due to natural calamities, pests & diseases.",
      category: "insurance"
    },
    {
      id: 2,
      name: "Kisan Credit Card",
      ministry: "Ministry of Finance",
      description: "Provides farmers with timely access to credit for their agricultural needs.",
      eligibility: "All farmers, tenant farmers, oral lessees and share croppers, SHGs or Joint Liability Groups of farmers.",
      benefits: "Short-term credit for cultivation, post-harvest expenses, produce marketing loan, consumption requirements of farmer household, etc.",
      category: "credit"
    },
    {
      id: 3,
      name: "Soil Health Card Scheme",
      ministry: "Department of Agriculture & Cooperation",
      description: "Promotes soil test based nutrient management practices for improved soil health.",
      eligibility: "All farmers across the country are eligible to get their farm soil tested under this scheme.",
      benefits: "Improved soil health, increased crop yield, and reduced cultivation costs through optimal fertilizer use.",
      category: "subsidies"
    },
    {
      id: 4,
      name: "PM Kisan Samman Nidhi Yojana",
      ministry: "Ministry of Agriculture & Farmers Welfare",
      description: "Provides income support to all land holding farmers' families in the country.",
      eligibility: "All landholder farmer families with cultivable landholding in their names.",
      benefits: "Direct income support of Rs. 6,000 per year in three equal installments of Rs. 2,000 each.",
      category: "subsidies"
    },
    {
      id: 5,
      name: "Agriculture Infrastructure Fund",
      ministry: "Ministry of Agriculture & Farmers Welfare",
      description: "Financing facility for creation of post-harvest management infrastructure and community farming assets.",
      eligibility: "Farmers, FPOs, PACS, Marketing Cooperative Societies, Self Help Groups, etc.",
      benefits: "Access to medium-long term debt financing for investment in viable projects for post-harvest management infrastructure.",
      category: "credit"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-agri-dark text-white py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Government Scheme Navigator</h1>
            <p className="text-agri-cream max-w-2xl">
              Discover and apply for agricultural subsidies, loans, and schemes you're eligible for.
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <div className="bg-agri-cream/30 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-agri-dark mb-4">Eligibility Checker</h2>
              <p className="text-agri-bark mb-4">
                Answer a few questions to find government schemes you may be eligible for.
              </p>
              <Button className="bg-agri-gold hover:bg-agri-brown text-white">
                Start Eligibility Check
              </Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-agri-cream/30">
                <TabsTrigger value="all">All Schemes</TabsTrigger>
                <TabsTrigger value="subsidies">Subsidies</TabsTrigger>
                <TabsTrigger value="credit">Credit & Loans</TabsTrigger>
                <TabsTrigger value="insurance">Insurance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {schemes.map((scheme) => (
                    <Card key={scheme.id} className="border-agri-gold/20">
                      <CardHeader className="bg-agri-cream/30 pb-2">
                        <CardTitle className="text-xl text-agri-dark">{scheme.name}</CardTitle>
                        <CardDescription>{scheme.ministry}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-agri-bark mb-3">{scheme.description}</p>
                        <div className="mb-3">
                          <h4 className="font-semibold text-agri-brown">Eligibility:</h4>
                          <p className="text-sm text-agri-bark">{scheme.eligibility}</p>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-semibold text-agri-brown">Benefits:</h4>
                          <p className="text-sm text-agri-bark">{scheme.benefits}</p>
                        </div>
                        <Button className="w-full bg-agri-gold hover:bg-agri-brown text-white">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="subsidies" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {schemes
                    .filter((scheme) => scheme.category === "subsidies")
                    .map((scheme) => (
                      <Card key={scheme.id} className="border-agri-gold/20">
                        <CardHeader className="bg-agri-cream/30 pb-2">
                          <CardTitle className="text-xl text-agri-dark">{scheme.name}</CardTitle>
                          <CardDescription>{scheme.ministry}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <p className="text-agri-bark mb-3">{scheme.description}</p>
                          <div className="mb-3">
                            <h4 className="font-semibold text-agri-brown">Eligibility:</h4>
                            <p className="text-sm text-agri-bark">{scheme.eligibility}</p>
                          </div>
                          <div className="mb-4">
                            <h4 className="font-semibold text-agri-brown">Benefits:</h4>
                            <p className="text-sm text-agri-bark">{scheme.benefits}</p>
                          </div>
                          <Button className="w-full bg-agri-gold hover:bg-agri-brown text-white">
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="credit" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {schemes
                    .filter((scheme) => scheme.category === "credit")
                    .map((scheme) => (
                      <Card key={scheme.id} className="border-agri-gold/20">
                        <CardHeader className="bg-agri-cream/30 pb-2">
                          <CardTitle className="text-xl text-agri-dark">{scheme.name}</CardTitle>
                          <CardDescription>{scheme.ministry}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <p className="text-agri-bark mb-3">{scheme.description}</p>
                          <div className="mb-3">
                            <h4 className="font-semibold text-agri-brown">Eligibility:</h4>
                            <p className="text-sm text-agri-bark">{scheme.eligibility}</p>
                          </div>
                          <div className="mb-4">
                            <h4 className="font-semibold text-agri-brown">Benefits:</h4>
                            <p className="text-sm text-agri-bark">{scheme.benefits}</p>
                          </div>
                          <Button className="w-full bg-agri-gold hover:bg-agri-brown text-white">
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="insurance" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {schemes
                    .filter((scheme) => scheme.category === "insurance")
                    .map((scheme) => (
                      <Card key={scheme.id} className="border-agri-gold/20">
                        <CardHeader className="bg-agri-cream/30 pb-2">
                          <CardTitle className="text-xl text-agri-dark">{scheme.name}</CardTitle>
                          <CardDescription>{scheme.ministry}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <p className="text-agri-bark mb-3">{scheme.description}</p>
                          <div className="mb-3">
                            <h4 className="font-semibold text-agri-brown">Eligibility:</h4>
                            <p className="text-sm text-agri-bark">{scheme.eligibility}</p>
                          </div>
                          <div className="mb-4">
                            <h4 className="font-semibold text-agri-brown">Benefits:</h4>
                            <p className="text-sm text-agri-bark">{scheme.benefits}</p>
                          </div>
                          <Button className="w-full bg-agri-gold hover:bg-agri-brown text-white">
                            View Details
                          </Button>
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

export default Schemes;
