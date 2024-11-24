"use client";


import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "../_comonents/CheckoutPage";
import { convertToSubcurrency } from "@/lib/convertToSubcurrency";
import { useContext } from "react";
import { AddContext } from "@/Context/Products";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  const totlalAmount = localStorage.getItem('totalamount');
   console.log(totlalAmount);
   

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Rakib</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> ${totlalAmount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(totlalAmount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={totlalAmount} />
      </Elements>
    </main>
  );
}