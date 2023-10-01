import "./SideBar.css";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa6";

const SideBar = () => {
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
            <li className="side-bar-list-item">Life</li>
            <li className="side-bar-list-item">Music</li>
            <li className="side-bar-list-item">Style</li>
            <li className="side-bar-list-item">Sport</li>
            <li className="side-bar-list-item">Tech</li>
            <li className="side-bar-list-item">Cinema</li>
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
