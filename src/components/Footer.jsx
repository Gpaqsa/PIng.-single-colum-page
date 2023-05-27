import React from "react";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
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
  );
};

export default Footer;
