import Header from "../../components/Header/Header";
import "./Home.css";
import SideBar from "../../components/SideBar/SideBar";
import Posts from "../../components/Posts/Posts";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();

  const fetchPosts = async () => {
    const posts = await axios.get("/api/posts" + search);
    setLoading(false);
    setPosts(posts.data);
  };
  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <section className="home">
        {loading ? (
          <FadeLoader
            className="loader"
            color="#36d7b7"
            loading={loading}
            size={100}
          />
        ) : (
          <Posts posts={posts} />
        )}
        <SideBar />
      </section>
    </>
  );
};

export default Home;
