
const Stats = () => {
  return (
    <section className="py-12 bg-agri-dark text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-agri-bright mb-2">5000+</div>
            <div className="text-agri-cream">Farmers Connected</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-agri-bright mb-2">2500+</div>
            <div className="text-agri-cream">Equipment Listings</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-agri-bright mb-2">300+</div>
            <div className="text-agri-cream">Government Schemes</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-agri-bright mb-2">100+</div>
            <div className="text-agri-cream">Agricultural Experts</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
