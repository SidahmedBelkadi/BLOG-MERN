import Header from "../../components/Header/Header";
import "./Home.css";
import SideBar from "../../components/SideBar/SideBar";
import Posts from "../../components/Posts/Posts";

const Home = () => {
  return (
    <>
      <Header />
      <section className="home">
        <Posts />
        <SideBar />
      </section>
    </>
  );
};

export default Home;
