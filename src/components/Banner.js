import "../styles/banner.css";
import paymentimg from "../assets/paymentimg2.svg";
import paypallogo from "../assets/paypallogo.png";
import stripelogo from "../assets/stripelogo.png";
import stripelogos from "../assets/stripelogos.png";
import Chip from "@mui/material/Chip";
//import Twomanhold from "../svgComponent/Twomanhold";

const mobilewidth = window.innerWidth;
console.log(mobilewidth);

function Banner(props) {
  return (
    <>
      <div className="Banner">
        <section className="Sec1">
          <h1>Multiple Payment Gateway Integration</h1>
          <p>
            Millions of companies of all sizes—from startups to <br /> Fortune
            500s—use Stripe/PayPal's etc software and <br /> APIs to accept
            payments, send payouts, and
            <br /> manage their businesses online.
          </p>
          <div className="Chip">
            <Chip label="pre-built payment flow" />
            <Chip style={{ margin: "10px" }} label="custom payment flow" />
            <Chip label="subscriptions" />
          </div>
        </section>
        {mobilewidth > 425 && (
          <section className="Sec2">
            <img className="BannerImg" src={paymentimg} alt="not found" />
          </section>
        )}
      </div>
      <div className="Logos-Container">
        <div className="Logo-container">
          <img src={stripelogo} alt="not found" />
        </div>
        <div className="Logo-container">
          <img src={paypallogo} alt="not found" />
        </div>
        <div className="Logo-container">
          <img src={stripelogos} alt="not found" />
        </div>
      </div>
    </>
  );
}

export default Banner;
