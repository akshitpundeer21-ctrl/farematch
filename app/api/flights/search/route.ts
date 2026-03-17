import { NextRequest } from "next/server";

// This is a mock API route for flight search
// In a real application, this would connect to Amadeus API or other flight data providers
export async function GET(request: NextRequest) {
  try {
    // Extract search parameters from query string
    const searchParams = request.nextUrl.searchParams;
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const departureDate = searchParams.get('departureDate');
    const returnDate = searchParams.get('returnDate');
    const passengers = searchParams.get('passengers') || '1';
    const cabinClass = searchParams.get('cabinClass') || 'economy';

    // Validate required parameters
    if (!from || !to || !departureDate) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters: from, to, departureDate' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Mock flight data based on search parameters
    const mockFlights = [
      {
        id: "1",
        flightNumber: "AA123",
        airline: "American Airlines",
        airlineCode: "AA",
        departure: {
          airport: from,
          time: "08:30",
          date: departureDate
        },
        arrival: {
          airport: to,
          time: "11:45",
          date: departureDate
        },
        duration: "5h 15m",
        stops: 0,
        aircraft: "Boeing 737",
        price: {
          total: 349.00,
          base: 299.00,
          taxes: 50.00,
          currency: "USD"
        },
        cabinClass: cabinClass,
        amenities: ["Entertainment", "Snacks", "Power outlets"],
        baggage: {
          carryOn: "1 bag (22x14x9 in)",
          checked: "1 bag (62 in total)"
        }
      },
      {
        id: "2",
        flightNumber: "DL456",
        airline: "Delta Airlines",
        airlineCode: "DL",
        departure: {
          airport: from,
          time: "10:15",
          date: departureDate
        },
        arrival: {
          airport: to,
          time: "13:30",
          date: departureDate
        },
        duration: "5h 15m",
        stops: 0,
        aircraft: "Airbus A321",
        price: {
          total: 379.00,
          base: 329.00,
          taxes: 50.00,
          currency: "USD"
        },
        cabinClass: cabinClass,
        amenities: ["Entertainment", "Meal", "Power outlets"],
        baggage: {
          carryOn: "1 bag (22x14x9 in)",
          checked: "1 bag (62 in total)"
        }
      },
      {
        id: "3",
        flightNumber: "UA789",
        airline: "United Airlines",
        airlineCode: "UA",
        departure: {
          airport: from,
          time: "14:20",
          date: departureDate
        },
        arrival: {
          airport: to,
          time: "17:35",
          date: departureDate
        },
        duration: "5h 15m",
        stops: 1,
        aircraft: "Boeing 777",
        price: {
          total: 289.00,
          base: 239.00,
          taxes: 50.00,
          currency: "USD"
        },
        cabinClass: cabinClass,
        amenities: ["Entertainment"],
        baggage: {
          carryOn: "1 bag (22x14x9 in)",
          checked: "1 bag (62 in total)"
        }
      }
    ];

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return new Response(
      JSON.stringify({
        data: mockFlights,
        count: mockFlights.length,
        searchParams: {
          from,
          to,
          departureDate,
          returnDate,
          passengers: parseInt(passengers),
          cabinClass
        },
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in flight search API:', error);
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
    const { from, to, departureDate, returnDate, passengers, cabinClass, maxPrice } = body;

    if (!from || !to || !departureDate) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters: from, to, departureDate' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // In a real app, this would process more complex filtering
    const mockFlights = [
      {
        id: "1",
        flightNumber: "AA123",
        airline: "American Airlines",
        airlineCode: "AA",
        departure: {
          airport: from,
          time: "08:30",
          date: departureDate
        },
        arrival: {
          airport: to,
          time: "11:45",
          date: departureDate
        },
        duration: "5h 15m",
        stops: 0,
        aircraft: "Boeing 737",
        price: {
          total: 349.00,
          base: 299.00,
          taxes: 50.00,
          currency: "USD"
        },
        cabinClass: cabinClass,
        amenities: ["Entertainment", "Snacks", "Power outlets"],
        baggage: {
          carryOn: "1 bag (22x14x9 in)",
          checked: "1 bag (62 in total)"
        }
      }
    ];

    return new Response(
      JSON.stringify({
        data: mockFlights,
        count: mockFlights.length,
        searchParams: {
          from,
          to,
          departureDate,
          returnDate,
          passengers: passengers || 1,
          cabinClass: cabinClass || 'economy',
          maxPrice
        },
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in flight search API (POST):', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}