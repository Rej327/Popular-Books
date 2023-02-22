import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex py-2 px-4 mb-5 bg-slate-100">
      <h1 className="text-2xl font-bold tracking-widest text-[#45a21a]">
        Popular Books
      </h1>
      <button className="addButton ml-auto p-2">
        <Link to="/add">Add New Book</Link>
      </button>
    </div>
  );
};

export default Navigation;
