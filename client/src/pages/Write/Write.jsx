import "./Write.css";
import { FaPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/Context.jsx";
import { useHistory } from "react-router-dom";

const Write = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [description, setDecription] = useState("");
  const [photo, setPhoto] = useState(null);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username } = user;
    const post = { title, description, username };
    if (photo) {
      const data = new FormData();
      const filename = Date.now() + photo.name;
      data.append("name", filename);
      data.append("photo", photo);
      post.photo = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (e) {
        console.log(e);
      }
    }
    try {
      const res = await axios.post("/api/posts", post);
      history.push("/posts/" + res.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="write">
      {photo && (
        <img className="write-img" src={URL.createObjectURL(photo)} alt="" />
      )}
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-form-group">
          <label htmlFor="file-input">
            <FaPlus className="write-icon" />
          </label>
          <input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            onChange={(e) => setPhoto(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="tell your story"
            type="text"
            className="write-input write-text"
            value={description}
            onChange={(e) => setDecription(e.target.value)}
          ></textarea>
        </div>
        <button
          className="write-submit"
          type="submit"
          style={{ cursor: "pointer" }}
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
