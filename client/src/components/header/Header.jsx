import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLm">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2022/04/24/05/18/flower-basket-7152910_960_720.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
