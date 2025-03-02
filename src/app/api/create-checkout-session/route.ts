import { stripe } from '@/server/services/stripe';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  try {
    const cart = await request.json();

    for (const item of cart) {
      const { price, name, quantity, id } = item;
      const lineItem = {
        price_data: {
          currency: 'usd',
          product_data: {
            name,
            metadata: {
              id,
            },
          },
          unit_amount: price,
        },
        quantity,
      };

      lineItems.push(lineItem);
    }

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      ui_mode: 'custom',
      return_url: `http://${process.env.BASE_URL}/checkout-success`,
    });

    return NextResponse.json({ clientSecret: session.client_secret }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
