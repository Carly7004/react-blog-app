import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
      <label>Username</label>
        <input type="text" placeholder="Enter your username" />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="registerButton">Login</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to='/login'>Login</Link>
      </button>
    </div>
  );
};

export default Register;
