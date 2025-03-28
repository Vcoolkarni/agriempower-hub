
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-agri-dark text-white py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About AgriEmpower</h1>
            <p className="text-agri-cream max-w-2xl">
              Empowering farmers through technology, knowledge, and community.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-heading">Our Mission</h2>
                <p className="text-agri-dark mb-6">
                  AgriEmpower is dedicated to revolutionizing agriculture in India by providing farmers with access to modern equipment, government schemes, and expert knowledge through a comprehensive digital platform.
                </p>
                <p className="text-agri-dark mb-6">
                  We believe that by bridging the information gap and connecting farmers with the resources they need, we can contribute to more sustainable and profitable agricultural practices across the country.
                </p>
                <Button className="bg-agri-gold hover:bg-agri-brown text-white">
                  Learn More
                </Button>
              </div>
              <div className="bg-agri-cream/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-agri-dark mb-4">Our Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-agri-gold text-white flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    <div>
                      <h4 className="font-semibold text-agri-dark">Farmer-Centric Approach</h4>
                      <p className="text-agri-bark">Putting farmers' needs at the center of everything we do</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-agri-gold text-white flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    <div>
                      <h4 className="font-semibold text-agri-dark">Accessibility</h4>
                      <p className="text-agri-bark">Making agricultural resources accessible to all farmers</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-agri-gold text-white flex items-center justify-center flex-shrink-0 mt-1">3</span>
                    <div>
                      <h4 className="font-semibold text-agri-dark">Integrity</h4>
                      <p className="text-agri-bark">Operating with transparency and honesty in all interactions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-agri-gold text-white flex items-center justify-center flex-shrink-0 mt-1">4</span>
                    <div>
                      <h4 className="font-semibold text-agri-dark">Innovation</h4>
                      <p className="text-agri-bark">Continuously improving our platform to meet evolving needs</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-agri-cream/30">
          <div className="container">
            <h2 className="section-heading text-center mb-12">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-agri-gold/30"></div>
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-1/2 -ml-4 mt-3 h-8 w-8 rounded-full border-4 border-white bg-agri-gold"></div>
                  <div className="ml-auto mr-12 md:mr-auto md:ml-12 md:pl-10 relative w-full md:w-1/2 px-4">
                    <h3 className="text-xl font-bold text-agri-dark mb-2">2020: The Beginning</h3>
                    <p className="text-agri-bark">
                      AgriEmpower was founded with a vision to create a comprehensive platform for farmers across India.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 -ml-4 mt-3 h-8 w-8 rounded-full border-4 border-white bg-agri-gold"></div>
                  <div className="mr-auto ml-12 md:ml-auto md:mr-12 md:pr-10 relative w-full md:w-1/2 px-4">
                    <h3 className="text-xl font-bold text-agri-dark mb-2">2021: Launch of Marketplace</h3>
                    <p className="text-agri-bark">
                      We launched our equipment marketplace, connecting farmers with verified vendors.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 -ml-4 mt-3 h-8 w-8 rounded-full border-4 border-white bg-agri-gold"></div>
                  <div className="ml-auto mr-12 md:mr-auto md:ml-12 md:pl-10 relative w-full md:w-1/2 px-4">
                    <h3 className="text-xl font-bold text-agri-dark mb-2">2022: Government Scheme Navigator</h3>
                    <p className="text-agri-bark">
                      We introduced our scheme eligibility tool to help farmers discover relevant programs.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 -ml-4 mt-3 h-8 w-8 rounded-full border-4 border-white bg-agri-gold"></div>
                  <div className="mr-auto ml-12 md:ml-auto md:mr-12 md:pr-10 relative w-full md:w-1/2 px-4">
                    <h3 className="text-xl font-bold text-agri-dark mb-2">2023: Expert Connect</h3>
                    <p className="text-agri-bark">
                      We built our expert consultation platform to provide farmers with specialized knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container text-center">
            <h2 className="section-heading inline-block mb-12">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-agri-gold/20 flex items-center justify-center text-agri-gold mb-4">
                    <span className="text-3xl font-bold">TM</span>
                  </div>
                  <h3 className="text-xl font-bold text-agri-dark">Team Member</h3>
                  <p className="text-agri-bark">Co-Founder</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-agri-dark text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the AgriEmpower Community</h2>
            <p className="text-agri-cream max-w-2xl mx-auto mb-8 text-lg">
              Be part of our mission to transform agriculture through technology and community.
            </p>
            <Button className="bg-agri-gold hover:bg-agri-brown text-white text-lg py-6 px-8">
              Sign Up Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
