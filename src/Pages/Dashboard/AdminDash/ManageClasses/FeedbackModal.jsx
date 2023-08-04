import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Heading from "../../../../components/Heading/Heading";
const FeedbackModal = () => {
  const datas = useLoaderData();
  const { _id } = datas;

  //usefrom
  const { register, handleSubmit, reset } = useForm();

  //register start
  const onSubmit = (data) => {
    reset();
    console.log(data);
    fetch(`https://re-school-camp-server.vercel.app/classes/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("FeedBack Send SuccesFully");
        }
      });
  };
  return (
    <div className=" w-[800px] mx-auto my-6">
      <ToastContainer></ToastContainer>

      <Heading title="Give your feedback"></Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="my-8">
        <div className="form-control">
          <textarea
            {...register("feedback")}
            className="textarea textarea-bordered h-24 textarea-primary"
            placeholder="Write Your Feedback"
          ></textarea>
        </div>
        <button className="btn btn-primary my-3" type="submit">
          Send FeedBack
        </button>
      </form>
    </div>
  );
};

export default FeedbackModal;
