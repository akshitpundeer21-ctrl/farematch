import { NextRequest } from "next/server";

// This is a mock API route for car rental search
// In a real application, this would connect to car rental company APIs
export async function GET(request: NextRequest) {
  try {
    // Extract search parameters from query string
    const searchParams = request.nextUrl.searchParams;
    const pickupLocation = searchParams.get('pickupLocation');
    const dropoffLocation = searchParams.get('dropoffLocation');
    const pickupDate = searchParams.get('pickupDate');
    const dropoffDate = searchParams.get('dropoffDate');
    const pickupTime = searchParams.get('pickupTime') || '10:00';
    const dropoffTime = searchParams.get('dropoffTime') || '10:00';
    const driverAge = parseInt(searchParams.get('driverAge') || '25');

    // Validate required parameters
    if (!pickupLocation || !dropoffLocation || !pickupDate || !dropoffDate) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters: pickupLocation, dropoffLocation, pickupDate, dropoffDate' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Calculate rental duration in days
    const startDate = new Date(pickupDate);
    const endDate = new Date(dropoffDate);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const rentalDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    // Mock car data based on search parameters
    const mockCars = [
      {
        id: "1",
        provider: "Hertz",
        name: "Toyota Camry",
        type: "Intermediate",
        seats: 5,
        luggageCapacity: 2,
        transmission: "Automatic",
        fuelType: "Gasoline",
        fuelPolicy: "Full to Full",
        price: {
          dailyRate: 45.00,
          total: 45.00 * rentalDays,
          currency: "USD",
          taxes: 15.00 * rentalDays
        },
        image: "/placeholder-car.jpg",
        rating: 4.3,
        reviewCount: 240,
        features: ["AC", "GPS", "Bluetooth", "Backup Camera"],
        specifications: {
          engine: "2.5L 4-cylinder",
          mpg: "28 city / 39 highway"
        }
      },
      {
        id: "2",
        provider: "Avis",
        name: "Honda Civic",
        type: "Economy",
        seats: 5,
        luggageCapacity: 2,
        transmission: "Manual",
        fuelType: "Gasoline",
        fuelPolicy: "Full to Full",
        price: {
          dailyRate: 35.00,
          total: 35.00 * rentalDays,
          currency: "USD",
          taxes: 12.00 * rentalDays
        },
        image: "/placeholder-car.jpg",
        rating: 4.1,
        reviewCount: 180,
        features: ["AC", "Bluetooth"],
        specifications: {
          engine: "2.0L 4-cylinder",
          mpg: "32 city / 42 highway"
        }
      },
      {
        id: "3",
        provider: "Enterprise",
        name: "Ford Escape",
        type: "SUV",
        seats: 5,
        luggageCapacity: 3,
        transmission: "Automatic",
        fuelType: "Gasoline",
        fuelPolicy: "Full to Full",
        price: {
          dailyRate: 60.00,
          total: 60.00 * rentalDays,
          currency: "USD",
          taxes: 20.00 * rentalDays
        },
        image: "/placeholder-car.jpg",
        rating: 4.5,
        reviewCount: 320,
        features: ["AC", "GPS", "Bluetooth", "Backup Camera", "4WD"],
        specifications: {
          engine: "1.5L Turbo 4-cylinder",
          mpg: "27 city / 33 highway"
        }
      },
      {
        id: "4",
        provider: "Budget",
        name: "Nissan Versa",
        type: "Compact",
        seats: 5,
        luggageCapacity: 2,
        transmission: "Automatic",
        fuelType: "Gasoline",
        fuelPolicy: "Full to Full",
        price: {
          dailyRate: 38.00,
          total: 38.00 * rentalDays,
          currency: "USD",
          taxes: 13.00 * rentalDays
        },
        image: "/placeholder-car.jpg",
        rating: 3.9,
        reviewCount: 150,
        features: ["AC", "Bluetooth", "USB Port"],
        specifications: {
          engine: "1.6L 4-cylinder",
          mpg: "32 city / 40 highway"
        }
      }
    ];

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return new Response(
      JSON.stringify({
        data: mockCars,
        count: mockCars.length,
        searchParams: {
          pickupLocation,
          dropoffLocation,
          pickupDate,
          dropoffDate,
          pickupTime,
          dropoffTime,
          driverAge
        },
        rentalDays,
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in car rental search API:', error);
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
      pickupLocation,
      dropoffLocation,
      pickupDate,
      dropoffDate,
      pickupTime,
      dropoffTime,
      driverAge,
      carType,
      maxPrice,
      transmission,
      features
    } = body;

    if (!pickupLocation || !dropoffLocation || !pickupDate || !dropoffDate) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters: pickupLocation, dropoffLocation, pickupDate, dropoffDate' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Calculate rental duration in days
    const startDate = new Date(pickupDate);
    const endDate = new Date(dropoffDate);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const rentalDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    // In a real app, this would process more complex filtering
    const mockCars = [
      {
        id: "1",
        provider: "Hertz",
        name: "Toyota Camry",
        type: "Intermediate",
        seats: 5,
        luggageCapacity: 2,
        transmission: "Automatic",
        fuelType: "Gasoline",
        fuelPolicy: "Full to Full",
        price: {
          dailyRate: 45.00,
          total: 45.00 * rentalDays,
          currency: "USD",
          taxes: 15.00 * rentalDays
        },
        image: "/placeholder-car.jpg",
        rating: 4.3,
        reviewCount: 240,
        features: ["AC", "GPS", "Bluetooth", "Backup Camera"],
        specifications: {
          engine: "2.5L 4-cylinder",
          mpg: "28 city / 39 highway"
        }
      }
    ];

    return new Response(
      JSON.stringify({
        data: mockCars,
        count: mockCars.length,
        searchParams: {
          pickupLocation,
          dropoffLocation,
          pickupDate,
          dropoffDate,
          pickupTime,
          dropoffTime,
          driverAge,
          carType,
          maxPrice,
          transmission,
          features
        },
        rentalDays,
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in car rental search API (POST):', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}