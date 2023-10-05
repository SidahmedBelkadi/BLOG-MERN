import { useEffect, useState } from "react";
import "./SideBar.css";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const res = await axios.get("/api/categories");
    setCategories(res.data.categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="side-bar">
      <div className="side-bar-item">
        <span className="side-bar-title">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/1105534/pexels-photo-1105534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          quidem, eius assumenda officia cupiditate quaerat minima alias,
        </p>
        <div className="side-bar-item">
          <span className="side-bar-title">CATEGORIES</span>
          <ul className="side-bat-list">
            {categories.map((cat) => (
              <Link className="link" to={`/?cat=${cat.name}`}>
                <li key={cat._id} className="side-bar-list-item">
                  {cat.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="side-bar-item">
        <span className="side-bar-title">FOLLOW US</span>
        <div className="side-bar-social">
          <FaSquareFacebook className="side-bar-icon" size={22} />
          <FaSquareTwitter className="side-bar-icon" size={22} />
          <FaInstagram className="side-bar-icon" size={22} />
          <FaPinterest className="side-bar-icon" size={22} />
        </div>
      </div>
    </section>
  );
};

export default SideBar;
