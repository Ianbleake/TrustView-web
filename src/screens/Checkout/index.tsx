import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const Checkout = ():React.ReactElement => {

  const fetchClientSecret = useCallback(async () => {

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/checkout/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          priceId: "price_1T86f0AUDGFLmS1NY83zsZ4L"
        })
      }
    );

    const data = await res.json();

    return data.clientSecret;

  }, []);

  const options = { fetchClientSecret };

  return (
    <div className="w-full h-full">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};