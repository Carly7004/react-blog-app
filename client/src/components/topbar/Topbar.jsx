import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
import "./topbar.css";

const Topbar = () => {
  // const user = false;
  const { user, dispatch } = useContext(Context)

  const handleLogOut = () => {
    dispatch({type: 'LOGOUT'})
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogOut}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      {/* Conditional rendering base on if user is login or not */}
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src={user.profilePic}
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
