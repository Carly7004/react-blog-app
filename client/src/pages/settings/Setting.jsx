import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://cdn.pixabay.com/photo/2022/05/26/15/02/happy-7223110_960_720.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="profilePPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:'none'}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Carly" />
          <label>Email</label>
          <input type="email" placeholder="carly@gmail" />
          <label>Username</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
