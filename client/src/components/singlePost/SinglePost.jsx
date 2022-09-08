import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = 'http://localhost:5000/images'

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          {/* link to acticle/post page */}
          <Link className="link" to="/post/:postId">
            sinegle
          </Link>
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <div className="singlePostAuthor">
            Author:
            <Link to={`/?users=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </div>
          <div className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </div>
        </div>
        <div className="singlePostDescription">{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePost;
