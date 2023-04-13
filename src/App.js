import "./App.css";

//COMPONENTS
import Form from "./components/form";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <div className="box" id="logo">
            <img src={logo} alt="logo" />
            <p>
              O Facebook ajuda você a se conectar e compartilhar com as pessoas
              que <br></br> fazem parte da sua vida.
            </p>
          </div>
          <div className="box" id="PartForm">
            <Form />
          </div>
        </section>
      </main>
      <footer>
        <section>
          <div id="box1">
            <a href="google.com">Português(Brasil)</a>
            <a href="google.com">English(US)</a>
            <a href="google.com">Español</a>
            <a href="google.com">Français (France)</a>
            <a href="google.com">中文(简体)</a>
            <a href="google.com">العربية</a>
            <a href="google.com">Italiano</a>
            <a href="google.com">한국어</a>
            <a href="google.com">Deutsch</a>
            <a href="google.com">日本語</a>
            <input type="button" value = '+'/>
          </div>
          <div id="box2">
            <a href="google.com">Cadastre-se</a>
            <a href="google.com">Entar</a>
            <a href="google.com">Messenger</a>
            <a href="google.com">Facebook lite</a>
            <a href="google.com">Watch</a>
            <a href="google.com">Locais</a>
            <a href="google.com">Jogos</a>
            <a href="google.com">Marketplace</a>
            <a href="google.com">Meta pay</a>
            <a href="google.com">Loja da Meta</a>
            <a href="google.com">Meta Quest</a>
            <a href="google.com">Instagran</a>
            <a href="google.com">Boletim</a>
            <a href="google.com">Campanhas de arrecadação de fundos</a>
            <a href="google.com">Serviços</a>
            <a href="google.com">Central de Informações de Votação</a>
            <a href="google.com">Política de Privacidade</a>
            <a href="google.com">Central de Privacidade</a>
            <a href="google.com">Grupos</a>
            <a href="google.com">Sobre</a>
            <a href="google.com">Criar anúncios</a>
            <a href="google.com">Criar página</a>
            <a href="google.com">Desenvolvedores</a>
            <a href="google.com">Carreira</a>
            <a href="google.com">Cookies</a>
            <a href="google.com">Escolhas para anúncios</a>
            <a href="google.com">Termos</a>
            <a href="google.com">Ajuda</a>
            <a href="google.com">Carregamento de contatos e não usuários</a>

          </div>
          <div id="box3">
            <span>Meta &copy; 2023</span>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
