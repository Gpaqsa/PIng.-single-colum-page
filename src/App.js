import "./App.css";
import logo from "../src/images/logo.svg";
import Input from "./components/Input";

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
      </main>
    </div>
  );
}

export default App;
