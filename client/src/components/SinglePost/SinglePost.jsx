import "./SinglePost.css";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

const SinglePost = () => {
  return (
    <div className="single-post">
      <div className="single-post-wrraper">
        <img
          src="https://images.pexels.com/photos/939723/pexels-photo-939723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="single-post-title">
          Lorem ipsum dolor sit amet consectetur.
          <div className="single-post-edit">
            <HiPencilAlt className="single-post-icon" />
            <HiTrash className="single-post-icon" />
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>Sidahmed</b>
          </span>
          <span className="single-post-date">1h ago</span>
        </div>
        <p className="single-post-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          voluptatum vero aliquam est harum, doloribus sit adipisci voluptas quo
          quidem unde porro quam nihil quaerat error reiciendis minus blanditiis
          minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          voluptatum vero aliquam est harum, doloribus sit adipisci voluptas quo
          quidem unde porro quam nihil quaerat error reiciendis minus blanditiis
          minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          voluptatum vero aliquam est harum, doloribus sit adipisci voluptas quo
          quidem unde porro quam nihil quaerat error reiciendis minus blanditiis
          minima.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
