import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <Link to={"/about"}>About Page</Link>
      <Link to={"/"}>Home Page</Link>
    </>
  );
};

export default Contact;
