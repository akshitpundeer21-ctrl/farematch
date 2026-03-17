// Mock data for user bookings
export const mockBookings = [
  {
    id: "BK001",
    type: "flight",
    status: "confirmed",
    title: "New York to Los Angeles",
    description: "American Airlines • AA1234",
    date: "Jun 15, 2023",
    price: 429,
    travelers: 2,
    reference: "AA123456",
  },
  {
    id: "BK002",
    type: "hotel",
    status: "confirmed",
    title: "Grand Plaza Hotel",
    description: "New York, NY • 3 nights",
    date: "Jun 15 - Jun 18, 2023",
    price: 567,
    travelers: 2,
    reference: "HT789012",
  },
  {
    id: "BK003",
    type: "car",
    status: "confirmed",
    title: "Toyota Camry Rental",
    description: "Hertz • LAX Airport",
    date: "Jun 15 - Jun 18, 2023",
    price: 180,
    travelers: 1,
    reference: "CR345678",
  },
  {
    id: "BK004",
    type: "package",
    status: "upcoming",
    title: "Hawaii Paradise Getaway",
    description: "7-day vacation package",
    date: "Jul 20 - Jul 27, 2023",
    price: 2199,
    travelers: 2,
    reference: "PK901234",
  },
  {
    id: "BK005",
    type: "flight",
    status: "cancelled",
    title: "Miami to Chicago",
    description: "Delta Airlines • DL5678",
    date: "May 10, 2023",
    price: 329,
    travelers: 1,
    reference: "DL567890",
  },
];

// Mock data for saved trips
export const mockSavedTrips = [
  {
    id: "ST001",
    name: "Europe Trip 2023",
    destination: "Paris, France",
    description: "2-week cultural tour through Europe",
    tripType: "package",
    searchParams: {},
  },
  {
    id: "ST002",
    name: "Summer Beach Getaway",
    destination: "Miami, FL",
    description: "Relaxing beach vacation",
    tripType: "hotel",
    searchParams: {},
  },
  {
    id: "ST003",
    name: "Mountain Adventure",
    destination: "Denver, CO",
    description: "Outdoor activities and hiking trip",
    tripType: "flight",
    searchParams: {},
  },
];

// Mock data for price alerts
export const mockPriceAlerts = [
  {
    id: "PA001",
    searchType: "flight",
    origin: "NYC",
    destination: "LAX",
    departureDate: "2023-07-15",
    currentPrice: 429,
    targetPrice: 350,
    isNotified: false,
  },
  {
    id: "PA002",
    searchType: "hotel",
    destination: "Miami, FL",
    checkInDate: "2023-08-01",
    checkOutDate: "2023-08-08",
    currentPrice: 219,
    targetPrice: 175,
    isNotified: true,
  },
  {
    id: "PA003",
    searchType: "flight",
    origin: "CHI",
    destination: "LAS",
    departureDate: "2023-09-10",
    currentPrice: 289,
    targetPrice: 225,
    isNotified: false,
  },
];

// Mock data for traveler profiles
export const mockTravelerProfiles = [
  {
    id: "TP001",
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1985-06-15",
    gender: "Male",
    nationality: "US",
    passportNumber: "P12345678",
    passportExpiry: "2028-06-15",
    phone: "+1-555-123-4567",
    specialNeeds: "",
  },
  {
    id: "TP002",
    firstName: "Jane",
    lastName: "Doe",
    dateOfBirth: "1988-09-22",
    gender: "Female",
    nationality: "US",
    passportNumber: "P87654321",
    passportExpiry: "2027-09-22",
    phone: "+1-555-987-6543",
    specialNeeds: "Vegetarian meal preference",
  },
];

// Mock data for payment methods
export const mockPaymentMethods = [
  {
    id: "PM001",
    type: "card",
    provider: "Visa",
    last4: "4242",
    brand: "Visa",
    expiryMonth: 12,
    expiryYear: 2027,
    isDefault: true,
  },
  {
    id: "PM002",
    type: "card",
    provider: "Mastercard",
    last4: "0002",
    brand: "Mastercard",
    expiryMonth: 5,
    expiryYear: 2026,
    isDefault: false,
  },
];

// Mock data for loyalty points
export const mockLoyaltyPoints = {
  totalPoints: 1250,
  pointsExpiry: "2024-12-31",
  tier: "Silver",
  benefits: ["10% off bookings", "Free seat selection", "Priority boarding"],
};