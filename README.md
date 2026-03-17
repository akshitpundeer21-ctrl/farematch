# FaresMatch - Travel Booking Platform

FaresMatch is a comprehensive travel booking platform that allows users to search and book flights, hotels, car rentals, and vacation packages. The platform features a modern UI with advanced search capabilities, user authentication, booking management, and payment processing.

## 🚀 Features

- **Multi-Service Search**: Search for flights, hotels, car rentals, and vacation packages
- **User Authentication**: Secure login/register with Google OAuth
- **Booking Management**: View and manage all bookings from the dashboard
- **Payment Processing**: Integrated Stripe payment system
- **Price Alerts**: Subscribe to price drop notifications
- **Traveler Profiles**: Save passenger information for quick bookings
- **Responsive Design**: Fully mobile-friendly interface
- **Real-time Search**: Fast search with filtering and sorting options

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion (animations)
- React Hook Form + Zod (form validation)
- Zustand (state management)
- React Query / TanStack Query (data fetching & caching)
- Lucide React (icons)
- date-fns (date utilities)

**Backend:**
- Next.js API Routes (serverless)
- Prisma ORM
- PostgreSQL (database)
- NextAuth.js v5 (authentication)
- Stripe (payments)
- Redis (caching for search results)

## 📁 Project Structure

```
faresmatch/
├── app/
│   ├── (auth)/login, register
│   ├── (main)/
│   │   ├── page.tsx (homepage)
│   │   ├── flights/
│   │   ├── hotels/
│   │   ├── car-rental/
│   │   ├── cruises/
│   │   ├── Sailboat/
│   │   ├── amtrak/
│   │   ├── vacation-packages/
│   │   ├── deals/
│   │   ├── blog/
│   │   └── aviation-data/
│   ├── api/
│   │   ├── flights/search, book, details
│   │   ├── hotels/search, book, details
│   │   ├── cars/search, book
│   │   ├── packages/search, book
│   │   ├── auth/
│   │   └── payments/
├── components/
│   ├── ui/ (shadcn components)
│   ├── search/ (search forms)
│   ├── results/ (result cards)
│   ├── filters/ (sidebar filters)
│   ├── booking/ (booking flows)
│   └── shared/ (header, footer, nav)
├── lib/ (utils, api clients, helpers)
├── hooks/ (custom React hooks)
├── store/ (Zustand stores)
├── types/ (TypeScript interfaces)
└── prisma/ (schema + migrations)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- Redis (for caching)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/faresmatch.git
cd faresmatch
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following:

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/faresmatch?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-key-here"

# Google OAuth (for authentication)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe (for payments)
STRIPE_SECRET_KEY="your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"

# Redis (for caching)
REDIS_URL="redis://localhost:6379"

# API Keys for external services
AMADEUS_API_KEY="your-amadeus-api-key"
AMADEUS_API_SECRET="your-amadeus-api-secret"
SKYSCANNER_API_KEY="your-skyscanner-api-key"
BOOKING_API_KEY="your-booking-api-key"
GOOGLE_PLACES_API_KEY="your-google-places-api-key"
```

4. Set up the database:

```bash
npx prisma migrate dev
```

5. Run the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 🔧 API Integrations

The application is structured to integrate with the following APIs:

- **Amadeus API** (flights)
- **Booking.com Affiliate API** (hotels)
- **Skyscanner Rapid API** (price comparison)
- **Google Places API** (location autocomplete)

## 🎨 Design System

- **Primary color:** Deep Blue #1B4FD8
- **Accent:** Bright Orange #F97316
- **Background:** White + Light Gray #F8FAFC
- **Font:** Inter (Google Fonts)
- **Border radius:** Rounded (12px cards, 8px inputs)
- **Shadows:** Soft drop shadows on cards
- Mobile-first, fully responsive (mobile, tablet, desktop)
- Dark mode support via Tailwind

## 📱 Mobile Features

- Install as PWA
- Push notifications for price drops
- Offline search results caching
- Bottom navigation bar for mobile

## 🚢 API Endpoints

- `GET /api/flights/search` - Search for flights
- `GET /api/hotels/search` - Search for hotels
- `GET /api/cars/search` - Search for car rentals
- `GET /api/packages/search` - Search for vacation packages
- `POST /api/bookings` - Create a booking
- `GET /api/bookings` - Get user bookings
- `POST /api/payments` - Process payment
- `POST /api/auth/[...nextauth]` - Authentication

## 🧪 Running Tests

```bash
npm run test
```

## 🚀 Deployment

The application is ready for deployment to Vercel or any other Next.js-compatible platform. Make sure to set all required environment variables in your deployment environment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, contact us at:
- Phone: +1-800-918-3039
- Email: support@faresmatch.com
