import React, { useState } from "react";

const Input = ({ heandlerInputEvent, submitEmail, inputValue, error }) => {
  return (
    <form className="input-main-content" onClick={submitEmail}>
      <div className="input-container">
        <input
          type="Email"
          placeholder="Your email address..."
          onChange={heandlerInputEvent}
          value={inputValue}
          className={error ? "error" : ""}
        />
      </div>
      <div className="button-container">
        <button onClick={submitEmail}>Notify Me</button>
      </div>
    </form>
  );
};

export default Input;
