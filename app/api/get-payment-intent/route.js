// app/api/get-payment-intent/route.js

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const payment_intent = searchParams.get("payment_intent");

  if (!payment_intent) {
    return new Response(JSON.stringify({ error: "Missing payment_intent" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const paymentIntent = await stripe.customers.retrievePaymentMethod(payment_intent);
    return new Response(JSON.stringify(paymentIntent), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2022-11-15",
// });

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const payment_intent = searchParams.get("payment_intent");

//   if (!payment_intent) {
//     return new Response(JSON.stringify({ error: "Missing payment_intent parameter" }), {
//       status: 400,
//     });
//   }

//   try {
//     const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent, {
//       expand: ["charges.data.billing_details"], // Expand charges and billing details
//     });

//     return new Response(JSON.stringify(paymentIntent), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Stripe API error:", error);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
