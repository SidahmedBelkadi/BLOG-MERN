import "./TopBar.css";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const TopBar = () => {
  const user = false;
  return (
    <section className="top-bar">
      <div className="top-left">
        <FaSquareFacebook className="top-icon" />
        <FaSquareTwitter className="top-icon" />
        <FaInstagram className="top-icon" />
        <FaPinterest className="top-icon" />
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="top-list-item">ABOUT</li>
          <li className="top-list-item">CONTACT</li>
          <li className="top-list-item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="top-list-item">
            {user && <li className="top-list-item">LOGOUT</li>}
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img
            className="top-img"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="top-list-item">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <BsSearch className="top-search-icon" size={20} />
      </div>
    </section>
  );
};

export default TopBar;
