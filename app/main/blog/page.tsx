import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Calendar, User, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  // Mock data for blog posts
  const blogPosts = [
    {
      id: "1",
      title: "Top 10 Travel Destinations for 2024",
      excerpt: "Discover the most popular travel destinations for the upcoming year based on booking trends and expert predictions.",
      author: "Travel Expert",
      date: "Jan 15, 2024",
      readTime: "5 min read",
      category: "Destinations",
      image: "/placeholder-blog.jpg",
    },
    {
      id: "2",
      title: "How to Save Money on International Flights",
      excerpt: "Expert tips and tricks for finding the cheapest international flights without sacrificing comfort.",
      author: "Savings Guru",
      date: "Jan 10, 2024",
      readTime: "7 min read",
      category: "Travel Tips",
      image: "/placeholder-blog.jpg",
    },
    {
      id: "3",
      title: "The Ultimate Packing Checklist for Summer Travel",
      excerpt: "Everything you need to pack for a perfect summer vacation, from essentials to travel gadgets.",
      author: "Packing Pro",
      date: "Dec 28, 2023",
      readTime: "4 min read",
      category: "Travel Tips",
      image: "/placeholder-blog.jpg",
    },
    {
      id: "4",
      title: "Best Cruise Lines for Family Vacations",
      excerpt: "Our top picks for family-friendly cruise lines with activities for all ages.",
      author: "Cruise Expert",
      date: "Dec 20, 2023",
      readTime: "6 min read",
      category: "Cruises",
      image: "/placeholder-blog.jpg",
    },
    {
      id: "5",
      title: "Hidden Gems: Underrated Destinations Worth Visiting",
      excerpt: "Explore beautiful places that are often overlooked by tourists but offer incredible experiences.",
      author: "Adventure Seeker",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: "Destinations",
      image: "/placeholder-blog.jpg",
    },
    {
      id: "6",
      title: "Hotel Booking Mistakes That Cost You Money",
      excerpt: "Avoid these common hotel booking errors to save money and ensure a better stay.",
      author: "Accommodation Expert",
      date: "Dec 10, 2023",
      readTime: "5 min read",
      category: "Hotels",
      image: "/placeholder-blog.jpg",
    },
  ];

  // Mock data for categories
  const categories = [
    { name: "All Posts", count: 42 },
    { name: "Travel Tips", count: 18 },
    { name: "Destinations", count: 12 },
    { name: "Hotels", count: 8 },
    { name: "Flights", count: 6 },
    { name: "Cruises", count: 5 },
    { name: "Car Rentals", count: 4 },
    { name: "Vacation Packages", count: 3 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Travel Blog & Tips</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="lg:w-2/3">
              {/* Featured post */}
              <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {blogPosts[0].category}
                    </span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                    <span className="mx-2">•</span>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <Button variant="outline">Read More</Button>
                  </div>
                </div>
              </div>

              {/* Blog posts grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.slice(1).map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-5">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          <span className="text-sm">{post.author}</span>
                        </div>
                        <Button size="sm">Read More</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <a href="#" className="text-gray-700 hover:text-blue-600">{category.name}</a>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Subscribe to Our Travel Newsletter</h3>
                <p className="mb-4 text-sm">Get the latest deals, travel tips, and destination inspiration</p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-2 rounded text-gray-900"
                  />
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
                </div>
              </div>

              {/* Popular posts */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <a key={post.id} href="#" className="flex">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded mr-3"
                      />
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">{post.title}</h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}