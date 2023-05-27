import "./App.css";
import logo from "../src/images/logo.svg";
import Input from "./components/Input";
import screenShot from "./images/illustration-dashboard.png";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram, BsFacebook } from "react-icons/bs";
function App() {
  return (
    <div className="App">
      <header className="logo-content">
        <div>
          <img src={logo} alt="logoImg" />
        </div>
      </header>

      <main className="main-content">
        <div className="phrase-content">
          <h1 className="main-phrase">
            <span>We are launching</span> soon!
          </h1>
          <span className="add-text"> Subscribe and get notified</span>
        </div>
        {/* div className="input-main-content" */}
        <Input />

        <section className="screenShotImg-content">
          <img src={screenShot} alt="dashboardImg" />
        </section>
      </main>

      <footer>
        <div>
          <a href="/">
            <BsFacebook size={32} color="hsl(223, 87%, 63%)" />
          </a>
          <a href="/">
            <FiTwitter size={32} color="hsl(223, 87%, 63%)" />
          </a>
          <a href="/">
            <BsInstagram size={32} color="hsl(223, 87%, 63%)" />
          </a>
        </div>

        <div>
          <span>&copy; Copyright Ping. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
