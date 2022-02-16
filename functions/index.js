const functions = require("firebase-functions");
const env = require("dotenv");
env.config();
const stripe = require("stripe")(process.env.Stripe_secret_key);
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.static("."));
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { items } = req.body;
  const calculateOrderAmount = () => {
    return items * 100;
  };

  //Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: "usd",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

//prebuilt checkout route
app.post("/create-checkout-session-prebuilt", async (req, res) => {
  const { items } = req.body;
  const calculateOrderAmount = () => {
    return items * 100;
  };
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    success_url: `https://sammy-portfolio0.netlify.app`,
    cancel_url: `https://sammy-portfolio0.netlify.app`,
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: calculateOrderAmount(),
          product_data: {
            name: "testproduct",
          },
        },
      },
    ],
  });

  //res.redirect(303, session.url);
  res.send(session.url);
});

console.log("connected to server");
//app.listen(3001, () => console.log("listening on port 3001"));
exports.api = functions.https.onRequest(app);
