import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errros, setErrros] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrros(error.message);
      console.log("[error]", error);
    } else {
      setErrros("");
      console.log("[PaymentMethod]", paymentMethod);
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
        type="submit "
        disabled={!stripe}
        className="btn btn-primary my-4"
      >
        Pay
      </button>

      {errros && <p className="text-red-800">{errros} </p>}
    </form>
  );
};

export default CheckoutFrom;
