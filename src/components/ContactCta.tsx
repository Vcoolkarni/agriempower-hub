
import { Button } from "@/components/ui/button";

const ContactCta = () => {
  return (
    <section className="py-16 bg-agri-gold/10">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agri-dark">Ready to Transform Your Farming Experience?</h2>
        <p className="text-agri-bark max-w-2xl mx-auto mb-8 text-lg">
          Join thousands of farmers who have already enhanced their agricultural operations with AgriEmpower.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-agri-gold hover:bg-agri-brown text-white text-lg py-6 px-8">
            Get Started Now
          </Button>
          <Button variant="outline" className="border-agri-gold text-agri-gold hover:bg-agri-gold hover:text-white text-lg py-6 px-8">
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
