import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
// import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPost] = useState([]);
  // const {search} = useLocation();
  // console.log(`this is search ${search}`)

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get("/posts" );
      setPost(response.data);
    };
    fetchPost();
  }, []);
  // Get post from api
  return (
    <div>
      <Header />
      <div className="home">
        {/* pass post props to posts component */}
        <Posts posts={posts} />
        <Sidebar />
      </div>
      homepage
    </div>
  );
};

export default Home;
