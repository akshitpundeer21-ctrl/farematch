import { NextRequest } from "next/server";

// This is a mock API route for flight details
// In a real application, this would connect to Amadeus API or other flight data providers
export async function GET(request: NextRequest) {
  try {
    // Extract flight ID from query string
    const searchParams = request.nextUrl.searchParams;
    const flightId = searchParams.get('id');

    if (!flightId) {
      return new Response(
        JSON.stringify({ error: 'Flight ID is required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Mock flight details based on flight ID
    const mockFlightDetails = {
      id: flightId,
      flightNumber: "AA123",
      airline: {
        name: "American Airlines",
        code: "AA",
        logoUrl: "/airline-logos/aa.png"
      },
      aircraft: {
        type: "Boeing 737-800",
        registration: "N12345",
        age: 8,
        seatingCapacity: 160
      },
      departure: {
        airport: {
          code: "JFK",
          name: "John F. Kennedy International Airport",
          city: "New York",
          country: "United States",
          terminal: "8",
          gate: "B12"
        },
        scheduledTime: "2024-06-15T08:30:00",
        estimatedTime: "2024-06-15T08:35:00",
        timezone: "America/New_York"
      },
      arrival: {
        airport: {
          code: "LAX",
          name: "Los Angeles International Airport",
          city: "Los Angeles",
          country: "United States",
          terminal: "4",
          gate: "5A"
        },
        scheduledTime: "2024-06-15T11:45:00",
        estimatedTime: "2024-06-15T11:50:00",
        timezone: "America/Los_Angeles"
      },
      duration: {
        totalMinutes: 315,
        formatted: "5h 15m"
      },
      stops: 0,
      route: {
        distance: 2475, // miles
        distanceKm: 3983,
        flightPath: [
          { lat: 40.6397, lng: -73.7789 }, // JFK
          { lat: 39.8561, lng: -104.6737 }, // Over Colorado
          { lat: 34.0522, lng: -118.2437 }, // LAX
        ]
      },
      pricing: {
        options: [
          {
            cabin: "economy",
            name: "Main Cabin",
            price: {
              total: 349.00,
              base: 299.00,
              taxes: 50.00,
              currency: "USD"
            },
            baggage: {
              carryOn: 1,
              checked: 1,
              feePerCheckedBag: 30.00
            },
            availability: 12
          },
          {
            cabin: "premium",
            name: "Premium Economy",
            price: {
              total: 599.00,
              base: 549.00,
              taxes: 50.00,
              currency: "USD"
            },
            baggage: {
              carryOn: 2,
              checked: 2,
              feePerCheckedBag: 0.00
            },
            availability: 5
          },
          {
            cabin: "business",
            name: "Business Class",
            price: {
              total: 1299.00,
              base: 1249.00,
              taxes: 50.00,
              currency: "USD"
            },
            baggage: {
              carryOn: 2,
              checked: 2,
              feePerCheckedBag: 0.00
            },
            availability: 2
          }
        ]
      },
      amenities: {
        entertainment: true,
        powerOutlets: true,
        wifi: true,
        meal: false,
        beverage: true
      },
      policies: {
        cancellation: {
          type: "within_24_hours",
          description: "Free cancellation within 24 hours of booking",
          fee: 0.00
        },
        changes: {
          type: "fee",
          description: "Changes allowed with fee",
          fee: 200.00
        }
      },
      aircraftAmenities: [
        "Personal TV screens",
        "Adjustable headrests",
        "USB charging ports",
        "LED lighting system"
      ],
      routeInformation: {
        weather: "Mostly clear",
        turbulenceForecast: "Light",
        sunrise: "05:43 AM EST",
        sunset: "08:22 PM EST"
      },
      additionalServices: [
        {
          name: "Preferred Seats",
          description: "Choose from preferred seats with more legroom",
          price: 30.00
        },
        {
          name: "Extra Legroom Seats",
          description: "Available in exit rows and front cabin",
          price: 60.00
        },
        {
          name: "Priority Boarding",
          description: "Board before general boarding begins",
          price: 15.00
        }
      ],
      environmentalImpact: {
        co2Emissions: 0.92, // tons per passenger
        offsetOptions: [
          {
            name: "Carbon Offset",
            price: 12.00,
            description: "Offset your flight's carbon emissions"
          }
        ]
      }
    };

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 300));

    return new Response(
      JSON.stringify({
        data: mockFlightDetails,
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in flight details API:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}