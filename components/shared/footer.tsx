"use client";

import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Deals", href: "/deals" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
  ];

  const airlines = [
    { name: "American", href: "/airlines/american" },
    { name: "United", href: "/airlines/united" },
    { name: "Delta", href: "/airlines/delta" },
    { name: "JetBlue", href: "/airlines/jetblue" },
    { name: "Frontier", href: "/airlines/frontier" },
    { name: "Spirit", href: "/airlines/spirit" },
    { name: "Alaska", href: "/airlines/alaska" },
    { name: "Emirates", href: "/airlines/emirates" },
  ];

  const destinations = [
    { name: "Florida", href: "/destinations/florida" },
    { name: "California", href: "/destinations/california" },
    { name: "New York", href: "/destinations/new-york" },
    { name: "Las Vegas", href: "/destinations/las-vegas" },
    { name: "Hawaii", href: "/destinations/hawaii" },
    { name: "Mexico", href: "/destinations/mexico" },
    { name: "Caribbean", href: "/destinations/caribbean" },
    { name: "Europe", href: "/destinations/europe" },
  ];

  const topRoutes = [
    { name: "NYC to LA", href: "/routes/nyc-la" },
    { name: "NYC to Miami", href: "/routes/nyc-miami" },
    { name: "Chicago to Denver", href: "/routes/chicago-denver" },
    { name: "Seattle to San Diego", href: "/routes/seattle-san-diego" },
    { name: "Boston to Orlando", href: "/routes/boston-orlando" },
    { name: "DC to Atlanta", href: "/routes/dc-atlanta" },
    { name: "Phoenix to Vegas", href: "/routes/phoenix-vegas" },
    { name: "Dallas to Austin", href: "/routes/dallas-austin" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">FaresMatch</h3>
            <p className="text-gray-400 mb-4">
              Your Trip. Your Fare. Your Match. Find the best deals on flights, hotels, and more.
            </p>
            <div className="flex items-center text-gray-400">
              <span className="mr-2">📞</span>
              <a href="tel:+1-800-918-3039" className="hover:text-white">
                +1-800-918-3039
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Airlines */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Airlines</h4>
            <ul className="space-y-2">
              {airlines.map((airline) => (
                <li key={airline.name}>
                  <Link
                    href={airline.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {airline.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((destination) => (
                <li key={destination.name}>
                  <Link
                    href={destination.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Top Routes */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-4">Top Routes</h4>
          <div className="flex flex-wrap gap-3">
            {topRoutes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} FaresMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;