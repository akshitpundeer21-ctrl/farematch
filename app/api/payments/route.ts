import { NextRequest } from "next/server";
import { headers } from "next/headers";

// This is a mock payment API route
// In a real application, you would integrate with Stripe's API
export async function POST(request: NextRequest) {
  try {
    const headersList = headers();
    const contentType = headersList.get('content-type');

    if (contentType !== 'application/json') {
      return new Response(JSON.stringify({ error: 'Content-Type must be application/json' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();

    // Validate request body
    const { amount, currency, paymentMethod, bookingId } = body;

    if (!amount || !currency || !paymentMethod || !bookingId) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // In a real app, you would:
    // 1. Create a payment intent with Stripe
    // 2. Process the payment
    // 3. Update your database
    // For this mock, we'll just return a success response

    const paymentResponse = {
      id: `pay_${Math.random().toString(36).substr(2, 9)}`,
      amount: amount,
      currency: currency,
      status: "succeeded",
      bookingId: bookingId,
      paymentMethod: paymentMethod,
      receiptUrl: `https://faresmatch.com/receipt/${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };

    return new Response(JSON.stringify(paymentResponse), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Payment processing error:', error);

    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}