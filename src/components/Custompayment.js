import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../styles/custompayment.css";
import axios from "./axios";
import Checkoutform from "./Checkoutform";

const stripePromise = loadStripe(
  "pk_live_51HU7jBKPa9WqoqlAuGXSQ8BWyELO25lIYOzfYF3LZXDqrw5FAp6XlbEq5Fzi5gVYuI8g1AxIW7ZyFrAjY9v7VATB00We6AtHdG"
);
function Custompayment(props) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios({
      method: "POST",
      url: "/create-checkout-session",
      data: { items: 1 },
    }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="CustomP">
      .
      <section className="Cherder">
        <h2>Custom Payment Flow With Stripe</h2>
        <p>
          Embed a custom Stripe payment form in your website or application. The
          client- and server-side code builds a checkout form with Elements to
          complete a payment using various payment methods. Customers remain on
          your web app when making payment
        </p>
        <div className="Element0">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <Checkoutform />
            </Elements>
          )}
        </div>
      </section>
    </div>
  );
}

export default Custompayment;
