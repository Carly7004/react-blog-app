import Post from "../post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
  // Received props from Home component and map through all post gotten from api
  return (
    <div className="posts">
      {/* mapped post getten from api and passing post content to post component*/}
      {posts.map((PM) => (
        <Post post={PM}/>
      ))}
    </div>
  );
};

export default Posts;
