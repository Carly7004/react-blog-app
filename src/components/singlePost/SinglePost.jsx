import { Link } from "react-router-dom";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://cdn.pixabay.com/photo/2022/08/11/14/28/woman-7379683_960_720.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          {/* link to acticle/post page */}
          <Link className='link' to='/post/:postId'>sinegle</Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <div className="singlePostAuthor">
            Author: <b>Carly N</b>
          </div>
          <div className="singlePostDate">1 hour ago</div>
        </div>
        <div className="singlePostDescription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
          consectetur maxime quos, deserunt voluptates iure nisi ipsa reiciendis
          vel. Sit illo ipsa eos facere iste. Laboriosam iure consequuntur
          corporis enim. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Esse consectetur maxime quos, deserunt voluptates iure nisi ipsa
          reiciendis vel. Sit illo ipsa eos facere iste. Laboriosam iure
          consequuntur corporis enim. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Esse consectetur maxime quos, deserunt voluptates
          iure nisi ipsa reiciendis vel. Sit illo ipsa eos facere iste.
          Laboriosam iure consequuntur corporis enim.
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
