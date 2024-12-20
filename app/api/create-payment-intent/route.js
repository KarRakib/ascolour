import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async (request) => {
   try {
      const { amount } = await request.json();

      const paymentIntent = await stripe.paymentIntents.create({
         amount: amount,
         currency: "usd",
         // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
         automatic_payment_methods: {
            enabled: true,
         },
      });
      return NextResponse.json({ clientSecret: paymentIntent.client_secret })
   } catch (error) {
      console.error('Internal Error:', error)
      return NextResponse.json({ error: `Internal Server Error : ${error}` }, { status: 500 })
   }

}

