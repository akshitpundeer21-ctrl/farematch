import { NextRequest } from "next/server";

// This is a mock API route for hotel search
// In a real application, this would connect to Booking.com API or other hotel data providers
export async function GET(request: NextRequest) {
  try {
    // Extract search parameters from query string
    const searchParams = request.nextUrl.searchParams;
    const destination = searchParams.get('destination');
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');
    const guests = searchParams.get('guests') || '2';
    const rooms = searchParams.get('rooms') || '1';

    // Validate required parameters
    if (!destination || !checkIn || !checkOut) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters: destination, checkIn, checkOut' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Mock hotel data based on search parameters
    const mockHotels = [
      {
        id: "1",
        name: "Grand Plaza Hotel",
        description: "Luxury hotel in the heart of the city with stunning views and premium amenities.",
        location: {
          name: destination,
          address: "123 Main Street",
          coordinates: { lat: 40.7128, lng: -74.0060 },
          distanceToCenter: "0.2 mi"
        },
        rating: 4.5,
        reviewCount: 842,
        starRating: 5,
        price: {
          total: 249.00,
          perNight: 189.00,
          currency: "USD",
          taxes: 60.00
        },
        images: [
          "/placeholder-hotel.jpg",
          "/placeholder-hotel2.jpg",
          "/placeholder-hotel3.jpg"
        ],
        amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant", "Parking"],
        roomTypes: [
          {
            type: "Deluxe King",
            price: 189,
            availability: 5
          },
          {
            type: "Executive Suite",
            price: 299,
            availability: 2
          }
        ],
        policies: {
          checkIn: "15:00",
          checkOut: "11:00",
          cancellation: "Free cancellation until 24 hours before arrival"
        }
      },
      {
        id: "2",
        name: "City Center Inn",
        description: "Modern hotel in the business district with convenient location and excellent service.",
        location: {
          name: destination,
          address: "456 Downtown Ave",
          coordinates: { lat: 40.7148, lng: -74.0080 },
          distanceToCenter: "0.5 mi"
        },
        rating: 4.2,
        reviewCount: 523,
        starRating: 4,
        price: {
          total: 199.00,
          perNight: 149.00,
          currency: "USD",
          taxes: 50.00
        },
        images: [
          "/placeholder-hotel.jpg",
          "/placeholder-hotel2.jpg"
        ],
        amenities: ["WiFi", "Business Center", "Restaurant", "Parking"],
        roomTypes: [
          {
            type: "Standard Queen",
            price: 149,
            availability: 8
          },
          {
            type: "Twin Room",
            price: 169,
            availability: 6
          }
        ],
        policies: {
          checkIn: "15:00",
          checkOut: "12:00",
          cancellation: "Free cancellation until 48 hours before arrival"
        }
      },
      {
        id: "3",
        name: "Riverside Resort",
        description: "Scenic resort with river views, perfect for relaxation and recreation.",
        location: {
          name: destination,
          address: "789 River Road",
          coordinates: { lat: 40.7208, lng: -74.0090 },
          distanceToCenter: "1.2 mi"
        },
        rating: 4.7,
        reviewCount: 387,
        starRating: 4,
        price: {
          total: 229.00,
          perNight: 179.00,
          currency: "USD",
          taxes: 50.00
        },
        images: [
          "/placeholder-hotel.jpg",
          "/placeholder-hotel3.jpg"
        ],
        amenities: ["WiFi", "Pool", "Gym", "Restaurant", "Beach Access", "Spa"],
        roomTypes: [
          {
            type: "River View",
            price: 179,
            availability: 3
          },
          {
            type: "Family Suite",
            price: 249,
            availability: 2
          }
        ],
        policies: {
          checkIn: "16:00",
          checkOut: "11:00",
          cancellation: "Free cancellation until 72 hours before arrival"
        }
      }
    ];

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return new Response(
      JSON.stringify({
        data: mockHotels,
        count: mockHotels.length,
        searchParams: {
          destination,
          checkIn,
          checkOut,
          guests: parseInt(guests),
          rooms: parseInt(rooms)
        },
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in hotel search API:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// POST route for more complex search
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Extract search parameters from request body
    const { destination, checkIn, checkOut, guests, rooms, minStar, maxPrice, amenities } = body;

    if (!destination || !checkIn || !checkOut) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters: destination, checkIn, checkOut' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // In a real app, this would process more complex filtering
    const mockHotels = [
      {
        id: "1",
        name: "Grand Plaza Hotel",
        description: "Luxury hotel in the heart of the city with stunning views and premium amenities.",
        location: {
          name: destination,
          address: "123 Main Street",
          coordinates: { lat: 40.7128, lng: -74.0060 },
          distanceToCenter: "0.2 mi"
        },
        rating: 4.5,
        reviewCount: 842,
        starRating: 5,
        price: {
          total: 249.00,
          perNight: 189.00,
          currency: "USD",
          taxes: 60.00
        },
        images: [
          "/placeholder-hotel.jpg",
          "/placeholder-hotel2.jpg"
        ],
        amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant", "Parking"],
        roomTypes: [
          {
            type: "Deluxe King",
            price: 189,
            availability: 5
          }
        ],
        policies: {
          checkIn: "15:00",
          checkOut: "11:00",
          cancellation: "Free cancellation until 24 hours before arrival"
        }
      }
    ];

    return new Response(
      JSON.stringify({
        data: mockHotels,
        count: mockHotels.length,
        searchParams: {
          destination,
          checkIn,
          checkOut,
          guests: guests || 2,
          rooms: rooms || 1,
          minStar,
          maxPrice,
          amenities
        },
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in hotel search API (POST):', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}