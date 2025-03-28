
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Wheat Farmer, Punjab",
    quote: "AgriEmpower helped me find the perfect tractor at a great price. The platform is easy to use and the verification process gives me confidence in the sellers."
  },
  {
    name: "Lakshmi Devi",
    role: "Rice Farmer, Tamil Nadu",
    quote: "Thanks to the Government Scheme Navigator, I discovered subsidies I didn't know I was eligible for. This has made a significant difference in my operations."
  },
  {
    name: "Mohan Singh",
    role: "Vegetable Farmer, Gujarat",
    quote: "The expert consultation service is exceptional. I received practical advice that helped me increase my crop yield by over 30% this season."
  },
  {
    name: "Priya Sharma",
    role: "Organic Farmer, Maharashtra",
    quote: "Finding organic farming equipment was always a challenge until I discovered AgriEmpower. Now I can connect with sellers who specialize in what I need."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto inline-block">What Farmers Say</h2>
          <div className="h-1 w-24 bg-agri-bright mx-auto mt-2 mb-6"></div>
          <p className="text-agri-bark max-w-2xl mx-auto text-lg">
            Hear from farmers who have transformed their agricultural practices using AgriEmpower
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <Card className="border border-agri-gold/20">
                  <CardContent className="p-6">
                    <blockquote className="text-lg text-agri-dark mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-agri-gold/20 flex items-center justify-center text-agri-gold font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-agri-brown">{testimonial.name}</div>
                        <div className="text-sm text-agri-bark">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-agri-gold text-white hover:bg-agri-brown hover:text-white -left-12" />
          <CarouselNext className="bg-agri-gold text-white hover:bg-agri-brown hover:text-white -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
