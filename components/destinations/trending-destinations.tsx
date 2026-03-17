const TrendingDestinations = () => {
  const destinations = [
    { name: "Michigan", price: "$399", image: "/placeholder.jpg" },
    { name: "New Jersey", price: "$249", image: "/placeholder.jpg" },
    { name: "Minnesota", price: "$599", image: "/placeholder.jpg" },
    { name: "Oregon", price: "$449", image: "/placeholder.jpg" },
    { name: "Illinois", price: "$329", image: "/placeholder.jpg" },
    { name: "Hawaii", price: "$799", image: "/placeholder.jpg" },
    { name: "Georgia", price: "$299", image: "/placeholder.jpg" },
    { name: "Colorado", price: "$549", image: "/placeholder.jpg" },
    { name: "Arizona", price: "$389", image: "/placeholder.jpg" },
    { name: "Nevada", price: "$289", image: "/placeholder.jpg" },
    { name: "Texas", price: "$369", image: "/placeholder.jpg" },
    { name: "Washington", price: "$489", image: "/placeholder.jpg" },
    { name: "California", price: "$429", image: "/placeholder.jpg" },
    { name: "Florida", price: "$349", image: "/placeholder.jpg" },
    { name: "New York", price: "$529", image: "/placeholder.jpg" },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Trending Destinations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {destinations.map((destination, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-40 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                  <h3 className="text-white font-semibold">{destination.name}</h3>
                  <p className="text-orange-400 font-bold">{destination.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingDestinations;