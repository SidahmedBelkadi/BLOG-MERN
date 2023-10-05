import { useState } from "react";
import "./register.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";

const Resgister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });
      setLoading(false);
      res.status == 200 && history.push("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      {loading ? (
        <FadeLoader
          className="loader"
          color="#36d7b7"
          loading={loading}
          size={100}
        />
      ) : (
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
            value={username}
            onChange={(e) => setUsername((username) => e.target.value)}
          />
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail((email) => e.target.value)}
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword((password) => e.target.value)}
          />
          <button className="registerButton">Register</button>
        </form>
      )}
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
      {error && <div className="error">Credentials does not match </div>}
    </div>
  );
};

export default Resgister;
