import SideBar from "../../components/SideBar/SideBar";
import "./Settings.css";
import { FaUserAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { UserContext } from "../../context/Context.jsx";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader.js";

const Settings = () => {
  const currentUser = useContext(UserContext);
  const { user } = currentUser;
  console.log(user);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);

    const updatedUser = { userId: user._id, username, email, password };
    if (photo) {
      const data = new FormData();
      const filename = Date.now() + photo.name;
      data.append("name", filename);
      data.append("photo", photo);
      updatedUser.profile_picture = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (e) {
        console.log(e);
      }
    }
    try {
      const res = await axios.put(`/api/users/${user._id}`, updatedUser);
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        {success && <div className="success">Update successful</div>}
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={
                photo
                  ? URL.createObjectURL(photo)
                  : `http://localhost:8000/images/${user.profile_picture}`
              }
              alt=""
            />
            <label htmlFor="fileInput">
              <FaUserAlt className="settingsPPIcon" />{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={username}
            name="name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
            {loading && (
              <FadeLoader
                className="loader"
                color="#36d7b7"
                loading={loading}
                size={50}
              />
            )}
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
