import { useContext, useEffect, useState } from "react";
import "./SinglePost.css";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";
import { UserContext } from "../../context/Context.jsx";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { user } = useContext(UserContext);

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const [update, setUpdate] = useState(false);
  const [updateTitle, setUpdatedTitle] = useState("");
  const [updateDescription, setUpdatedDescription] = useState("");

  const fetchPost = async () => {
    const res = await axios.get(`/api/posts/${path}`);
    setLoading(false);
    setPost(res.data);
    setUpdatedTitle(res.data.title);
    setUpdatedDescription(res.data.description);
  };

  useEffect(() => {
    fetchPost();
  }, [path, update]);

  const { title, description, username, updatedAt, photo } = post;

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete("/api/posts/" + path);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = async () => {
    try {
      await axios.put("/api/posts/" + path, {
        title: updateTitle,
        description: updateDescription,
      });
      setUpdate(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="single-post">
        {loading ? (
          <FadeLoader
            className="loader"
            color="#36d7b7"
            loading={loading}
            size={100}
          />
        ) : (
          <div className="single-post-wrraper">
            {photo && (
              <img src={"http://localhost:8000/images/" + photo} alt="" />
            )}
            {update ? (
              <input
                type="text"
                placeholder="Title"
                className="write-input"
                autoFocus={true}
                value={updateTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
            ) : (
              <h1 className="single-post-title">
                {title}
                {user?.username === post.username && (
                  <div className="single-post-edit">
                    <HiPencilAlt
                      className="single-post-icon"
                      onClick={() => setUpdate(true)}
                    />
                    <HiTrash
                      className="single-post-icon"
                      onClick={handleDelete}
                    />
                  </div>
                )}
              </h1>
            )}
            <div className="single-post-info">
              <span className="single-post-author">
                <Link className="link" to={`/?user=${username}`}>
                  Author: <b>{username}</b>
                </Link>
              </span>
              <span className="single-post-date">
                {new Date(updatedAt).toDateString()}
              </span>
            </div>
            {update ? (
              <textarea
                placeholder="tell your story"
                className="write-input write-text"
                value={updateDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
              ></textarea>
            ) : (
              <p className="single-post-description">{description}</p>
            )}
          </div>
        )}
      </div>
      {update && (
        <button className="singlePostButton" onClick={handleClick}>
          Update
        </button>
      )}
    </>
  );
};

export default SinglePost;
