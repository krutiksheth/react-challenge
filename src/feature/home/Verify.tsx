import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useStoreContext } from "../../context/storecontext";
import Input from "../../shared/components/Input";
import InputOtp from "../../shared/components/InputOtp";

function Verify() {
  const [enableButton, setEnableButton] = useState(false);
  const { user, setUser, generateOtp } = useStoreContext();
  const [otp, setOtpState] = useState({
    value: "",
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });

  function handleSendOtp(e) {
    const otp = generateOtp();
    setUser({ ...user, otpToSend: otp, otpToValidate: otp });
  }

  function handleClick(e) {
    //const data = new FormData(e.target);
    console.log(otp);
    if (!enableButton) e.preventDefault();
  }

  function handleChange(event) {
    setOtpState({ ...otp, [event.currentTarget.name]: event.target.value });
    //console.log(otp);
  }

  function handleFocus(elmnt) {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      if (elmnt.currentTarget.value === "") return;
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  }

  return (
    <div className="grid place-items-center app-container">
      <p>
        We've sent a 6-digit verification code to the email address or phone
        <br />
        {user.emailOrPhone}
      </p>
      <p className="label">
        Enter verification code [for test code :{user.otpToSend}]
      </p>
      <div>
        <form className="bg-white rounded px-8 pt-6">
          <div className="mb-4">
            <div className="grid grid-cols-6 gap-2">
              <InputOtp
                name="otp1"
                value={otp.otp1}
                onChange={handleChange}
                onFocus={handleFocus}
                tabIndex={1}
              ></InputOtp>
              <InputOtp
                name="otp2"
                tabIndex={2}
                value={otp.otp2}
                onChange={handleChange}
                onFocus={handleFocus}
              ></InputOtp>
              <InputOtp
                name="otp3"
                tabIndex={3}
                value={otp.otp3}
                onChange={handleChange}
                onFocus={handleFocus}
              ></InputOtp>
              <InputOtp
                name="otp4"
                tabIndex={4}
                value={otp.otp4}
                onChange={handleChange}
                onFocus={handleFocus}
              ></InputOtp>
              <InputOtp
                name="otp5"
                tabIndex={5}
                value={otp.otp5}
                onChange={handleChange}
                onFocus={handleFocus}
              ></InputOtp>
              <InputOtp
                name="otp6"
                tabIndex={6}
                value={otp.otp6}
                onChange={handleChange}
                onFocus={handleFocus}
              ></InputOtp>
            </div>
            <div>&nbsp;</div>
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
          </div>
        </form>
        <div className="app-divider"></div>
        <p className="app-label2">Didn't receive your code?</p>
        <p className="app-label2">
          <a href="#">Send to a different email address</a>
        </p>
        <p className="app-label2">
          <a onClick={handleSendOtp} href="#">
            Resend your code{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Verify;
