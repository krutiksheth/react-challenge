import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useStoreContext } from "../../context/storecontext";
import Input from "../../shared/components/Input";

function Home() {
  const { user, setUser } = useStoreContext();
  const [phone, setPhone] = useState("");
  const [enableButton, setEnableButton] = useState(false);

  function handleChange($event: any) {
    const val = $event.currentTarget.value;

    if (val !== "") {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
    setPhone(val);
    setUser({ ...user, emailOrPhone: val });
  }

  function handleClick(e) {
    if (!enableButton) e.preventDefault();
  }

  return (
    <div className="grid place-items-center app-container">
      <div className="grid grid-cols-1" style={{ width: "25rem" }}>
        <div className="inline-flex justify-center">
          <NavLink
            to="/email"
            className="bg-white-300 py-2 px-4 rounded-l app-tab-header"
          >
            Email
          </NavLink>
          <button className="bg-white-300   py-2 px-4 rounded-r app-tab-header-active ">
            Phone
          </button>
        </div>
        <form className="bg-white rounded px-8 pt-6">
          <div className="mb-4">
            <Input
              name="phone"
              placeholder="Ex (337) 378 8383"
              value={phone}
              onChange={($event) => handleChange($event)}
            />
          </div>
          <div className="inline-flex justify-center w-full">
            <NavLink
              onClick={handleClick}
              to="/verify"
              className={
                "bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-l app-tab-header " +
                (!enableButton ? "app-primary-button" : "app-accent-button")
              }
            >
              <i className="fas fa-greater-than"></i>Continue
            </NavLink>
          </div>
        </form>
        <p className="app-terms">
          by clicking continue you must agree to near labs
          <br />
          <span className="app-color-blue">
            Terms & Conditions ans Privacy Policy
          </span>
        </p>
        <div className="app-divider"></div>
        <p className="app-terms" style={{ fontSize: "14px" }}>
          Already have NEAR account?
        </p>

        <div className="inline-flex justify-center w-full">
          <button className="bg-gray-500 hover:bg-gray-500 py-2 px-4 rounded-l text-white app-darkgray-button">
            Login with NEAR <i className="fas fa-band"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
