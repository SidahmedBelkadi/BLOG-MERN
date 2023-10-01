import "./Write.css";
import { FaPlus } from "react-icons/fa";

const Write = () => {
  return (
    <div className="write">
      <img
        className="write-img"
        src="https://images.pexels.com/photos/939723/pexels-photo-939723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <from className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <FaPlus className="write-icon" />
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="tell your story"
            type="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </from>
    </div>
  );
};

export default Write;
