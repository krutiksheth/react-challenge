import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import "./App.css";
import Home from "./../../feature/home/Home";
import Email from "./../../feature/home/Email";
import Verify from "./../../feature/home/Verify";
import User from "../models/user";
import { StoreContext } from "../../context/storecontext";

function App() {
  function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  const otp = generateOtp();

  const [user, setUser] = useState<User>({
    emailOrPhone: "",
    isValid: false,
    otpToSend: otp,
    otpToValidate: otp,
  });

  return (
    <StoreContext.Provider value={{ user, setUser, generateOtp }}>
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Switch>
            <Route path="/email" component={Email}></Route>
            <Route path="/verify" component={Verify}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </div>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
