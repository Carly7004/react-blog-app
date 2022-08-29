import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  // Received props from posts component after mapping through all post from api
  return (
    // Displaying all post content from api to their respective place
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats" >
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <div className="postTitle">{post.title}</div>
        </Link>
        <hr />
        <div className="postDate">
          {new Date(post.createdAt).toDateString()}
        </div>
      </div>
      <div className="postDescription">{post.desc}</div>
    </div>
  );
};

export default Post;
