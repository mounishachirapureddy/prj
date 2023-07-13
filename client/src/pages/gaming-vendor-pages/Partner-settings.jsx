import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import UserProfile from "../../components/gaming-vendor-components/UserProfile.jsx";
import Hero from "../../components/gaming-vendor-components/Hero";
import Header from "../../components/gaming-vendor-components/Header.jsx";
import Footer from "../../components/general-components/Footer.jsx";

const Settings = () => {
  const [vendorId, setVendorId] = useState("");
  const [vendor_name, setVendorName] = useState("");
  const [vendor_snappcoins, setVendorSnappcoins] = useState("");

  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const [reminder, setReminder] = useState("");
  const [promote, setPromote] = useState("");
  const [disable_profile, setDisableProfile] = useState("");
  const [newsletter, setNewsletter] = useState("");

  const navigate = useNavigate();

  const verifyUser = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/gaming-vendor-auth/verify-user",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setVendorId(data.vendor_id);
        } else {
          navigate("/gaming-vendor-login");
        }
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  const getDetails = async () => {
    try {
      await fetch(
        `http://localhost:3001/gaming-vendor-wallet/snappcoin-counter/${vendorId}`
      )
        .then((response) => response.json())
        .then((data) => {
          setVendorName(data.vendor_name);
          setVendorSnappcoins(data.vendor_coins);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, [vendorId]);

  useEffect(() => {
    try {
      fetch(
        `http://localhost:3001/gaming-vendor/get-account-settings/${vendorId}`
      )
        .then((response) => response.json())
        .then((data) => {
          const { reminders, promote, profile_temp_disable, newsletter } = data;
          setReminder(reminders);
          setPromote(promote);
          setDisableProfile(profile_temp_disable);
          setNewsletter(newsletter);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [vendorId]);

  const handleCheckboxChange = async (event) => {
    switch (event.target.name) {
      case "reminder":
        setReminder(event.target.checked);
        break;
      case "promote":
        setPromote(event.target.checked);
        break;
      case "disable_profile":
        setDisableProfile(event.target.checked);
        break;
      case "newsletter":
        setNewsletter(event.target.checked);
        break;
      default:
    }

    try {
      const response = await fetch(
        `http://localhost:3001/gaming-vendor/set-account-settings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            vendor_id: vendorId,
            reminders: reminder,
            promote,
            profile_temp_disable: disable_profile,
            newsletter,
          }),
        }
      );
      if (response.ok) {
        let data = await response.json();
        setReminder(data.reminders);
        setPromote(data.promote);
        setDisableProfile(data.profile_temp_disable);
        setNewsletter(data.newsletter);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  //   console.log(password);
  // };

  // const handlePasswordConfirmationChange = (event) => {
  //   setPasswordConfirmation(event.target.value);
  // };

  // const handlePasswordUpdate = async () => {
  //   const formData = { vendorId, password, password_confirmation };
  //   try {
  //     await fetch(`http://localhost:3001/gaming-vendor/change-password`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ formData }),
  //     })
  //       .then(async function (response) {
  //         if (response.ok) {
  //           // Success case
  //           return response.json();
  //         } else {
  //           // Error case
  //           const data = await response.json();
  //           throw new Error(JSON.stringify(data.errors));
  //         }
  //       })
  //       .then(function (data) {
  //         // Handle the API response
  //         toastFunction(data.message);
  //       })
  //       .catch(function (error) {
  //         console.log(error);

  //         // Display the error messages on the front end
  //         const errorMessages = JSON.parse(error.message);

  //         // Clear any previous error messages
  //         const errorDivs = document.getElementsByClassName("error-message");
  //         for (var i = 0; i < errorDivs.length; i++) {
  //           errorDivs[i].textContent = "";
  //         }

  //         // Update the content of each error <div> with the corresponding error message
  //         errorMessages.forEach(function (errorMessage, index) {
  //           if (errorDivs[index]) {
  //             toastFunction(errorMessage);
  //           }
  //         });
  //       });
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // function toastFunction(message) {
  //   const x = document.getElementById("toast");
  //   x.textContent = message;
  //   x.className = "show";
  //   setTimeout(function () {
  //     x.className = x.className.replace("show", "");
  //   }, 3000);
  // }

  return (
    <>
      <Header name={vendor_name} snappcoins={vendor_snappcoins} />

      <main>
        <Hero />

        <div className="container margin_30_40">
          <div className="row">
            <UserProfile
              page={"settings"}
              name={"@" + vendor_name}
              snappcoins={vendor_snappcoins}
            />
            <div className="col-lg-9 ps-lg-5">
              <div className="main_title version_2">
                <span>
                  <em></em>
                </span>
                <h2>Account Settings</h2>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Change Password</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Abstract modern art"
                      // onChange={handlePasswordChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Repeat Password</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Abstract modern art"
                      // onChange={handlePasswordConfirmationChange}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <div id="error-message" className="error-message"></div>
                      <div
                        id="toast"
                        className="center"
                        style={{ marginTop: "0px" }}
                      >
                        <div className="checkicon">
                          <i className="fas fa-check-square" />
                        </div>
                      </div>
                    </div>
                    <p
                      className="text-end"
                      style={{ marginLeft: "15px", marginTop: "4px" }}
                    >
                      {/* <a href="#" className="btn_1" onClick={handlePasswordUpdate}>
                        Save Password
                      </a> */}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mt-3 mb-5" />
              <h6>Settings</h6>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group switch_wrapper">
                    <label>Reminders</label>
                    <p className="mb-0">Ea quo utroque forensibus eloquentiam</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={reminder}
                        onChange={handleCheckboxChange}
                        name="reminder"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group switch_wrapper">
                    <label>Promote</label>
                    <p className="mb-0">Ea quo utroque forensibus eloquentiam</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={promote}
                        onChange={handleCheckboxChange}
                        name="promote"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group switch_wrapper">
                    <label>Disable Profile Temporarily</label>
                    <p className="mb-0">Ea quo utroque forensibus eloquentiam</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={disable_profile}
                        onChange={handleCheckboxChange}
                        name="disable_profile"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group switch_wrapper">
                    <label>Newsletter</label>
                    <p className="mb-0">Ea quo utroque forensibus eloquentiam</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={newsletter}
                        onChange={handleCheckboxChange}
                        name="newsletter"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Settings;
