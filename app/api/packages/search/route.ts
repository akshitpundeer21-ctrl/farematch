import { NextRequest } from "next/server";

// This is a mock API route for vacation package search
// In a real application, this would aggregate data from multiple sources
export async function GET(request: NextRequest) {
  try {
    // Extract search parameters from query string
    const searchParams = request.nextUrl.searchParams;
    const destination = searchParams.get('destination');
    const departureCity = searchParams.get('departureCity');
    const travelDate = searchParams.get('travelDate');
    const travelersCount = parseInt(searchParams.get('travelers') || '2');
    const budget = searchParams.get('budget');
    const duration = parseInt(searchParams.get('duration') || '7');

    // Validate required parameters
    if (!destination || !departureCity || !travelDate) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters: destination, departureCity, travelDate' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Mock vacation package data based on search parameters
    const mockPackages = [
      {
        id: "1",
        name: "Hawaii Paradise Getaway",
        destination: "Hawaii",
        description: "7-day luxury package with flights, 5-star accommodation, and premium experiences.",
        duration: 7,
        included: {
          flights: true,
          hotel: "5-star resort",
          meals: "Breakfast & Dinner included",
          transfers: true,
          activities: ["Snorkeling", "Luau dinner", "Hiking tour"]
        },
        excluded: ["Lunch", "Spa services", "Alcohol"],
        price: {
          perPerson: 1499.00,
          total: 1499.00 * travelersCount,
          currency: "USD",
          taxes: 150.00 * travelersCount
        },
        provider: "Hawaii Luxury Travel",
        rating: 4.8,
        reviewCount: 542,
        images: [
          "/placeholder-vacation.jpg",
          "/placeholder-vacation2.jpg",
          "/placeholder-vacation3.jpg"
        ],
        departureOptions: [
          {
            date: travelDate,
            airline: "Hawaiian Airlines",
            departureTime: "09:30",
            arrivalTime: "15:45"
          }
        ],
        accommodation: {
          name: "Grand Hawaii Resort",
          rating: 5,
          amenities: ["Private beach", "Multiple pools", "Spa", "3 restaurants"]
        },
        availability: ["2024-06-01", "2024-06-15", "2024-07-01", "2024-07-15"]
      },
      {
        id: "2",
        name: "European Cultural Tour",
        destination: "Europe",
        description: "14-day tour through 5 countries with guided experiences and cultural immersion.",
        duration: 14,
        included: {
          flights: true,
          hotel: "4-star hotels",
          meals: "Daily breakfast",
          transfers: true,
          activities: ["City tours", "Museum visits", "Cooking classes"]
        },
        excluded: ["Lunch", "Dinner", "Personal expenses"],
        price: {
          perPerson: 2499.00,
          total: 2499.00 * travelersCount,
          currency: "USD",
          taxes: 250.00 * travelersCount
        },
        provider: "Euro Explorer Tours",
        rating: 4.6,
        reviewCount: 387,
        images: [
          "/placeholder-vacation.jpg",
          "/placeholder-vacation2.jpg"
        ],
        departureOptions: [
          {
            date: travelDate,
            airline: "Multiple Airlines",
            departureTime: "08:00",
            arrivalTime: "20:30"
          }
        ],
        accommodation: {
          name: "Selected 4-star hotels",
          rating: 4,
          amenities: ["Free WiFi", "Breakfast included", "City center location"]
        },
        availability: ["2024-05-01", "2024-05-15", "2024-06-01", "2024-06-15"]
      },
      {
        id: "3",
        name: "Caribbean Cruise Adventure",
        destination: "Caribbean",
        description: "7-night cruise with stops at multiple islands and all-inclusive amenities.",
        duration: 7,
        included: {
          flights: true,
          hotel: "Cruise ship accommodation",
          meals: "All meals included",
          transfers: "Airport to ship",
          activities: ["Onboard entertainment", "Port excursions", "Kids club"]
        },
        excluded: ["Alcoholic drinks", "Specialty dining", "Spa treatments"],
        price: {
          perPerson: 1199.00,
          total: 1199.00 * travelersCount,
          currency: "USD",
          taxes: 120.00 * travelersCount
        },
        provider: "Caribbean Dream Cruises",
        rating: 4.5,
        reviewCount: 421,
        images: [
          "/placeholder-vacation.jpg",
          "/placeholder-vacation3.jpg"
        ],
        departureOptions: [
          {
            date: travelDate,
            airline: "Multiple Airlines",
            departureTime: "10:00",
            arrivalTime: "16:00"
          }
        ],
        accommodation: {
          name: "Ocean Paradise Cruise Ship",
          rating: 4.5,
          amenities: ["Multiple restaurants", "Pools", "Entertainment", "Spa", "Kids activities"]
        },
        availability: ["2024-04-01", "2024-04-15", "2024-05-01", "2024-05-15"]
      }
    ];

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return new Response(
      JSON.stringify({
        data: mockPackages,
        count: mockPackages.length,
        searchParams: {
          destination,
          departureCity,
          travelDate,
          travelers: travelersCount,
          budget: budget ? parseInt(budget) : undefined,
          duration
        },
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in vacation package search API:', error);
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
    const {
      destination,
      departureCity,
      travelDate,
      travelers,
      budget,
      duration,
      packageType,
      rating,
      amenities
    } = body;

    if (!destination || !departureCity || !travelDate) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters: destination, departureCity, travelDate' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // In a real app, this would process more complex filtering
    const mockPackages = [
      {
        id: "1",
        name: "Hawaii Paradise Getaway",
        destination: "Hawaii",
        description: "7-day luxury package with flights, 5-star accommodation, and premium experiences.",
        duration: duration || 7,
        included: {
          flights: true,
          hotel: "5-star resort",
          meals: "Breakfast & Dinner included",
          transfers: true,
          activities: ["Snorkeling", "Luau dinner", "Hiking tour"]
        },
        excluded: ["Lunch", "Spa services", "Alcohol"],
        price: {
          perPerson: 1499.00,
          total: 1499.00 * (travelers || 2),
          currency: "USD",
          taxes: 150.00 * (travelers || 2)
        },
        provider: "Hawaii Luxury Travel",
        rating: 4.8,
        reviewCount: 542,
        images: ["/placeholder-vacation.jpg"],
        departureOptions: [
          {
            date: travelDate,
            airline: "Hawaiian Airlines",
            departureTime: "09:30",
            arrivalTime: "15:45"
          }
        ],
        accommodation: {
          name: "Grand Hawaii Resort",
          rating: 5,
          amenities: ["Private beach", "Multiple pools", "Spa", "3 restaurants"]
        },
        availability: ["2024-06-01", "2024-06-15", "2024-07-01", "2024-07-15"]
      }
    ];

    return new Response(
      JSON.stringify({
        data: mockPackages,
        count: mockPackages.length,
        searchParams: {
          destination,
          departureCity,
          travelDate,
          travelers: travelers || 2,
          budget: budget || undefined,
          duration: duration || 7,
          packageType,
          rating,
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
    console.error('Error in vacation package search API (POST):', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}