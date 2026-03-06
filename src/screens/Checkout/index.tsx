import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from "@stripe/react-stripe-js";

const envApiUrl = import.meta.env.VITE_ENV_SCOPE === "PROD" ? import.meta.env.VITE_API_URL : import.meta.env.VITE_DEV_API_URL;
const envStripeKey = import.meta.env.VITE_ENV_SCOPE === "PROD" ? import.meta.env.VITE_STRIPE_PUBLIC_KEY : import.meta.env.VITE_DEV_STRIPE_PUBLIC_KEY;

const stripePromise = loadStripe(envStripeKey);

export const Checkout = ():React.ReactElement => {

  const fetchClientSecret = useCallback(async () => {

    const res = await fetch(
      `${envApiUrl}/checkout/create-checkout-session`,
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