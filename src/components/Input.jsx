import React, { useState } from "react";

const Input = ({ heandlerInputEvent, submitEmail, inputValue, error }) => {
  return (
    <form className="input-main-content" onClick={submitEmail}>
      <div className="input-container">
        <input
          type="Email"
          // placeholder="Your email address..."
          placeholder={error ? "example@email/com" : "Your email address"}
          onChange={heandlerInputEvent}
          value={inputValue}
          className={error ? "error" : null}
        />
        <div className="errorDiv">
          {error ? (
            <p className="errorMessage">
              Please provide a valid email address...
            </p>
          ) : null}
        </div>
      </div>

      {/* {console.log(inputValue)} */}
      <div className="button-container">
        <button onClick={submitEmail}>Notify Me</button>
        {/* {console.log(submitEmail)} */}
      </div>
    </form>
  );
};

export default Input;
