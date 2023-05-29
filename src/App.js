import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import screenShot from "./images/illustration-dashboard.png";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  // console.log(error);
  const heandlerInputEvent = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
    setError(false);
  };

  const submitEmail = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    // console.log(inputValue);

    if (inputValue.length === 0 || inputValue === " ") {
      setError(true);
    } else if (!inputValue.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      setError(true);
    } else {
      setError(false);
      setInputValue("");
      alert("Your email has been pinged ");
    }
  };

  return (
    <div className="App">
      <Header />

      <main className="main-content">
        <div className="phrase-content">
          <h1 className="main-phrase">
            <span>We are launching</span> soon!
          </h1>
          <span className="add-text"> Subscribe and get notified</span>
        </div>

        {/* div className="input-main-content" */}
        <Input
          heandlerInputEvent={heandlerInputEvent}
          submitEmail={submitEmail}
          inputValue={inputValue}
          error={error}
        />

        <section className="screenShotImg-content">
          <img src={screenShot} alt="dashboardImg" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
