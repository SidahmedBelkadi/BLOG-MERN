import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/939723/pexels-photo-939723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="post-info">
        <div className="post-cat">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>
        <span className="post-title">
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <hr />
        <span className="post-date">1 h ago</span>
      </div>
      <p className="post-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nobis
        nulla, obcaecati ut labore eos voluptatibus necessitatibus corrupti
        veritatis ipsa error quidem mollitia quibusdam delectus accusantium quas
        laborum pariatur aliquid. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit.
      </p>
    </div>
  );
};

export default Post;
