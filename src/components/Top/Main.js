import React from "react";
import "./Main.css";
//Images
import Logo from "../../assets/logo.svg";
//Components
import Form from "../Form/Form";

const Main = () => {
  return (
    <div id="Main">
      <div id="left">
        <img src={Logo} alt="" />
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>

      <Form />
    </div>
  );
};

export default Main;
