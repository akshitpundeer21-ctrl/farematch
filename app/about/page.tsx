import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Users, Globe, Award, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">About FaresMatch</h1>

          <div className="bg-white rounded-lg shadow p-8 mb-8">
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                FaresMatch is a leading travel technology company dedicated to helping millions of travelers find the best deals on flights, hotels, car rentals, and vacation packages worldwide.
              </p>

              <p className="mb-6">
                Founded in 2023, our mission is to make travel accessible and affordable for everyone by providing transparent, comprehensive comparisons across hundreds of travel sites in one place. We believe that the best travel experiences start with seamless planning and booking.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                    <p>
                      To empower travelers with the best tools and information to make informed decisions about their travel plans, while fostering sustainable and responsible tourism practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                    <p>
                      To simplify travel planning by aggregating the best deals and options from across the internet, providing users with comprehensive, unbiased comparisons to make informed choices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white rounded-lg shadow p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Travelers Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-gray-200">Airlines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2M+</div>
                <div className="text-gray-200">Hotels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-gray-200">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100K+</div>
                <div className="text-gray-200">Reviews</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-6">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold">John Smith</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold">Sarah Johnson</h3>
                <p className="text-gray-600">CTO</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold">Michael Lee</h3>
                <p className="text-gray-600">Head of Product</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}