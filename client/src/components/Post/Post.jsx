import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { _id, title, description, username, categories, createdAt, photo } =
    post;
  return (
    <div className="post">
      {photo && <img src={"http://localhost:8000/images/" + photo} alt="" />}
      <div className="post-info">
        <div className="post-cat">
          {categories.map((cat) => (
            <span className="post-cat">{cat.name}</span>
          ))}
        </div>
        <Link className="link" to={`/post/${_id}`}>
          <span className="post-title">{title}</span>
        </Link>
        <hr />
        <span className="post-date">{new Date(createdAt).toDateString()}</span>
      </div>
      <p className="post-description">{description}</p>
    </div>
  );
};

export default Post;
