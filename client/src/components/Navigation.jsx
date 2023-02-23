import React from "react";
import { Link } from "react-router-dom";
import { body } from "../styles/styles";

const Navigation = () => {
  return (
    <div className={body.navigationSect}>
      <h1 className={body.navText}>Popular Books</h1>
      <button className={body.btn}>
        <Link to="/add">Add New Book</Link>
      </button>
    </div>
  );
};

export default Navigation;
