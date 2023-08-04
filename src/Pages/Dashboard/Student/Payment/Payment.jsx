import { Elements } from "@stripe/react-stripe-js";
// import CheckoutFrom from "./CheckoutFrom";
import CheckOutPage from "./CheackOutPage";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import useMyClasses from "../../../../hooks/useMyClasses";

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
    },
  ],
};
const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PAYMENT}`);
const Payment = () => {
  const [myClasses] = useMyClasses();
  const { id } = useParams();
  const paymentClass = myClasses.filter((classe) => classe._id === id);
  const classData = paymentClass[0];
  const productPrice = classData?.price;

  return (
    <div className=" w-[200px] lg:w-[500px] mx-auto my-5">
      <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
        {/* <CheckoutFrom price={productPrice}></CheckoutFrom> */}
        <CheckOutPage price={productPrice} classInfo={classData}></CheckOutPage>
      </Elements>
    </div>
  );
};

export default Payment;
