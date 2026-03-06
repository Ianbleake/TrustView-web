import { useEffect, useState } from "react";

const envApiUrl = import.meta.env.VITE_ENV_SCOPE === "PROD" ? import.meta.env.VITE_API_URL : import.meta.env.VITE_DEV_API_URL;

export const CheckoutReturn = ():React.ReactElement => {

  const [status, setStatus] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");

    fetch(
      `${envApiUrl}/checkout/session-status?session_id=${sessionId}`
    )
      .then(res => res.json())
      .then(data => {
        setStatus(data.status);
        setEmail(data.customer_email);
      });

  }, []);

  if (status === "complete") {
    return (
      <div>
        Pago completado 🎉  
        Confirmación enviada a {email}
      </div>
    );
  }

  return <div>Procesando pago...</div>;
};