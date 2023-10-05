import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/Context.jsx";
import FadeLoader from "react-spinners/FadeLoader";

const Login = () => {
  const userRef = useRef("");
  const passwordRef = useRef("");
  const { isFetching, dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const data = {
      username: userRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", data);
      setLoading(false);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
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
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
