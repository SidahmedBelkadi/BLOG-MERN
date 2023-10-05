import "./Posts.css";
import Post from "../Post/Post";
const Posts = ({ posts }) => {
  return (
    <section className="posts">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </section>
  );
};

export default Posts;
