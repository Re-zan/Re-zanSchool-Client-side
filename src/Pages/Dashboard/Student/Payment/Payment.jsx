import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT);
const Payment = () => {
  return (
    <div className="m-20">
      <h2 className=" my-5 text-orange-400">Payment System</h2>
      <Elements stripe={stripePromise}>
        {" "}
        <CheckoutFrom></CheckoutFrom>
      </Elements>
    </div>
  );
};

export default Payment;
