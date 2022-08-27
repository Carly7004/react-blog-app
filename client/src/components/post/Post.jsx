import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2022/08/21/21/24/blackandwhite-7402145_960_720.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <div className="postCat">Music</div>
          <div className="postCat">Life</div>
        </div>
        <div className="postTitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <hr />
        <div className="postDate">1 hour ago</div>
      </div>
      <div className="postDescription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum incidunt
        ullam accusamus voluptate maiores consequatur odio, dolore ex explicabo
        sequi, velit labore porro ipsum illo quo aspernatur placeat libero eos.
      </div>
    </div>
  );
};

export default Post;
