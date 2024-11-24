'use client'
import React from 'react'
import {
  useStripe,
} from "@stripe/react-stripe-js";
const PaymentSuccess = ({ stripeResponse }) => {

  // return (
  //     <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
  //       <div className="mb-10">
  //         <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
  //         <h2 className="text-2xl">You successfully sent</h2>

  //         <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
  //           ${amount}
  //         </div>
  //       </div>
  //     </main>
  //   );
  console.log('success',stripeResponse);
  
  if (stripeResponse?.status !== 'succeeded') {
    return <div className="text-red-500">Payment Failed or Pending</div>;
  }

  const { receipt_url, amount, currency, billing_details } = stripeResponse;
  const { name, address } = billing_details;

  return (
    <PaymentSuccess
      receiptUrl={receipt_url}
      amount={amount}
      currency={currency}
      name={name}
      address={address}
    />
  );
}

export default PaymentSuccess