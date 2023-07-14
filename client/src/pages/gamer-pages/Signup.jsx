import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useFetch from "../../hooks/useFetch-gamer";

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [fetchData, { loading }] = useFetch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { url: `/auth/register`, method: "post", data: formData };
    fetchData(config)
      .then((data) => {
        localStorage.setItem("verify", true);
        localStorage.removeItem("token");
        navigate("/gamer-verify", {
          state: { id: data.userId, email: data.email },
        });
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };

  return (
    <>
      <div id="register_bg">
        <div id="login">
          <aside>
            <figure>
              <a href="/" class="logo_account">
                <img
                  src="assets/img/logo.svg"
                  alt=""
                  width="140"
                  height="35"
                  class="dark"
                />
              </a>
            </figure>
            <form autocomplete="off">
              <div className="access_social">
                <a href="#0" className="social_bt facebook">
                  Register with Facebook
                </a>
                <a href="#0" className="social_bt google">
                  Register with Google
                </a>
              </div>
              <div className="divider">
                <span>Or</span>
              </div>
              <div class="form-group mb-3">
                <input
                  class="form-control"
                  type="text"
                  placeholder="User Name"
                  name="userName"
                  value={formData.userName}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group mb-3">
                <input
                  class="form-control"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group mb-3">
                <input
                  class="form-control"
                  type="password"
                  id="password1"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  autoComplete="off"
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
              </div>
              <div id="pass-info" class="clearfix"></div>
              <Link
                to="#0"
                class="btn_1 rounded full-width"
                onClick={handleSubmit}
              >
                Register Now!
              </Link>
              <div class="text-center add_top_10">
                Already have an acccount?{" "}
                <strong>
                  <Link to="/gamer-login">Sign In</Link>
                </strong>
              </div>
            </form>
            <div class="copy">
              © 2023 <a href="/">Snappcoins</a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Signup;
