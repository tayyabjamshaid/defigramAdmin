import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { AuthAction } from "../../Actions/userAction";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const history = useHistory();
  const upcomingData = useSelector((state) => state.userSignIn);
  const { userInfo } = upcomingData;
  const submitForm = (e) => {
    e.preventDefault();
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || !password) {
      toast.error("Please Fill all the fields");
    } else {
      if (re.test(email)) {
        if (password.length >= 4) {
          dispatch(AuthAction(email, password));
        } else {
          toast.error("Password length must be greater than 3");
        }
      } else {
        toast.error("Email must be in Email Pattern");
      }
    }
  };
  useEffect(() => {
    if (userInfo) {
      history.push("/admin/dashboard");
    }
  }, [userInfo, history]);
  return (
    <div>
      <nav class="navbar" style={{ "height": "70px" }}>
        <div class="navbar-brand mb-0 h1" style={{ "width": "6%" }}>
          <img
            src={require("assets/img/def.png")}
            className="img-fluid"
            alt="logo"
          />
        </div>
      </nav>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                style={{ color: "black" }}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                style={{ color: "black" }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" id="btn1" onClick={submitForm}>
                Submit
              </button>
            </div>

            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
