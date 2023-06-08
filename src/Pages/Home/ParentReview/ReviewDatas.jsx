import { Rating } from "@smastrom/react-rating";
import "./Review.css";
import "@smastrom/react-rating/style.css";
const ReviewDatas = ({ reviewData }) => {
  const { parent_name, rating, comment, img_url } = reviewData;
  return (
    <div className="card card-side bg-white shadow-xl my-10 ">
      <figure>
        <img src={img_url} alt="Movie" className="h-[400px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-design text-2xl">{parent_name}</h2>
        <p className=" w-[300px] my-6 font-medium">{comment}</p>
        <div className="flex items-center">
          <Rating
            style={{ maxWidth: 130 }}
            readOnly
            orientation="horizantal"
            value={rating}
          />
          <p className=" font-bold text-xl font[grand] mx-6 mt-2">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDatas;
