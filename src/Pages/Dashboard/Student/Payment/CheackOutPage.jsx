import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import useAuth from "../../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const CheackOutPage = ({ price, classInfo }) => {
  const stripe = useStripe();
  const { user } = useAuth();

  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const [cardError, setCardError] = useState();
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axios
        .post(
          "https://re-school-camp-server.vercel.app/create-payment-inteten",
          { price }
        )
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "fgd dfh",
            name: user?.displayName || "ankjhdsjg",
          },
        },
      });
    if (confirmError) {
      toast.error(
        "After successfully completing payemnt once you cann't try again"
      );
    }
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server

      const payment = {
        email: user?.email,
        name: user?.displayName,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        itemID: classInfo?._id,
        itemName: classInfo?.class_name,
        instructor: classInfo?.instructor_name,
      };
      axios
        .post("https://re-school-camp-server.vercel.app/payments", payment)
        .then((res) => {
          if (res.data.insertedId) {
            toast("Payment Completed SuccessFully");
          }
        });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="btn my-3"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>

      <p className="text-red-800 my-4">{cardError}</p>
      <ToastContainer></ToastContainer>
    </form>
  );
};

export default CheackOutPage;
