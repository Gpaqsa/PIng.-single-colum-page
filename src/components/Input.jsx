import React from "react";

const Input = () => {
  return (
    <div className="input-main-content">
      <div className="input-container">
        <input type="Email" placeholder="Your email address..." />
      </div>
      <div className="button-container">
        <button>Notify Me</button>
      </div>
    </div>
  );
};

export default Input;
