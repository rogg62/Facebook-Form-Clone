import "./formStilo.css";
import { useState } from "react";
const Form = () => {
  //Estado inicial do componente igual a 'vazio'
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //Função que lida com as alterações - esta com a alteração do email
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  //Esta com a senha
  function handleSenhaChange(event) {
    setSenha(event.target.value);
  }

  //responsavel por envia os dados no console
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);
    setEmail("");
    setSenha("");
  }

  return (
    <div id="formContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email ou telefone"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Senha"
          id="senha"
          value={senha}
          onChange={handleSenhaChange}
        />
        <button id="EntrarLogin">Entrar</button>
        <a href="google.com" id="link-form">
          Esqueceu a senha?
        </a>

        <div id="form-cadastrar">
          <button id="CriarSenha" type="submit">
            Criar nova conta
          </button>
        </div>
      </form>
      <p>
        <a href="google.com">Criar uma página</a> para uma celebridade, uma
        marca ou uma empresa.
      </p>
    </div>
  );
};

export default Form;
