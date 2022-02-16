import "../styles/prebuilt.css";
import paymentimg from "../assets/paymentimg2.svg";
import { Button } from "@mui/material";
import axios from "./axios";
import { useState } from "react";

function Prebuiltpayment() {
  const [loading, setLoading] = useState(false);
  const handleclick = () => {
    setLoading(true);
    axios({
      method: "post",
      url: "/create-checkout-session-prebuilt",
      data: { items: 1 },
    })
      .then((res) => {
        setLoading(false);
        window.location.href = res.data;
      })
      .catch((err) => {
        setLoading(false);
        //console.log(err?.response?.data);
      });
  };
  return (
    <>
      <section className="Prebuilt">
        <div className="preContainer">
          <h2>Pre-built Payment Flow With Stripe</h2>
          <p>
            Hello guys in this demo we utilized stripes pre-built payment system
            which you can embed in your application to accept quick and fast
            secure payments, when you click on checkout, you will be redirected
            automatically to stripes pre-built payment page
          </p>
          <Button onClick={handleclick}>
            {" "}
            {loading ? <span>Loading...</span> : <span>checkout</span>}
          </Button>
        </div>
      </section>
    </>
  );
}

export default Prebuiltpayment;
