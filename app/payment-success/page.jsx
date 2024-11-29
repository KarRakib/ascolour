"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const PaymentSuccess = () => {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [paymentIntentId, setPaymentIntentId] = useState(null);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  console.log('payment ', paymentDetails);

  useEffect(() => {
    // Fetch the payment_intent from the URL
    setPaymentIntentId(searchParams.get("payment_intent"));
  }, [searchParams]);
console.log('id', paymentIntentId);

  useEffect(() => {
    if (paymentIntentId) {
      fetch(`/api/get-payment-intent?payment_intent=${paymentIntentId}`)
  .then((res) => {
    if (!res.ok) throw new Error("Failed to fetch payment details");
    return res.json();
  })
  .then((data) => {
    console.log("Fetched payment details:", data);
    setPaymentDetails(data);
  })
  .catch((err) => {
    console.error("Error fetching payment details:", err);
    setError(err.message);
  });
    }
  }, [paymentIntentId]);

  if (error) {
    return <div className="p-6 bg-white rounded-lg shadow-md">Error: {error}</div>;
  }

  if (!paymentDetails) {
    return <div>Loading payment details...</div>;
  }

  // Extract billing details
  const billingDetails = paymentDetails?.charges?.data?.[0]?.billing_details;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Payment Successful!</h2>
      <p><strong>Payment Intent:</strong> {paymentDetails?.id}</p>
      <p><strong>Status:</strong> {paymentDetails?.status}</p>
      {billingDetails ? (
  <>
    <p><strong>Billing Details:</strong></p>
    <ul className="ml-4">
      <li><strong>Name:</strong> {billingDetails.name}</li>
      <li><strong>Email:</strong> {billingDetails.email}</li>
      <li><strong>Address:</strong> 
        {billingDetails.address?.line1}, {billingDetails.address?.city}, {billingDetails.address?.country}
      </li>
    </ul>
  </>
) : (
  <p>Billing details are not available for this payment.</p>
)}
    </div>
  );
};

export default PaymentSuccess;
