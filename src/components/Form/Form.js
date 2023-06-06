import React from "react";
import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSenhaChange(event) {
    setSenha(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);
    setEmail("");
    setSenha("");
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email or phone number"
        id="input"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="text"
        placeholder="Password"
        value={senha}
        onChange={handleSenhaChange}
      />
      <button id="first" type="submit">Login</button>
      <a href="#Menu">Forgot Password?</a>
      <div>
        <button id="second">Create new Account</button>
      </div>
    </form>
  );
};

export default Form;
