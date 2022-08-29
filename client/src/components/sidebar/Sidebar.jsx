import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const reponse = await axios.get('/categories')
      setCats(reponse.data)
    }
    getCats();
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://cdn.pixabay.com/photo/2022/08/23/04/12/vietnamese-woman-7404948_960_720.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde totam
          impedit, perspiciatis a quibusdam voluptatem.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
       {cats.map((category) => (
          <Link to={`/cat=${category.name}`} className='link'>
            <li className="sidebarListItems">{category.name}</li>
          </Link>
       ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
