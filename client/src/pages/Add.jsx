import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//add data
const Add = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    cover: "",
    description: "",
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //navigatio to homepage when success
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/books", book);
      navigate("/");
      alert("New book succesfully added!");
    } catch (err) {
      alert("The book is not succesfully added!");
    }
  };

  return (
    <div className="addBook-form">
      <h1 className="heading">Add Book</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="title"
        required
      />
      <input
        type="text"
        placeholder="Author"
        onChange={handleChange}
        name="author"
        required
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
        required
      />
      <textarea
        id="message"
        placeholder="Description"
        onChange={handleChange}
        name="description"
        required=""
      />
      <button
        onClick={handleClick}
        className="py-2 w-full text-white my-1 bg-[#4cc713] hover:bg-opacity-80"
      >
        Add Book
      </button>
      <button className="py-2 w-full text-white my-1 bg-red-600 hover:bg-opacity-80">
        <Link to="/">Cancel</Link>
      </button>
    </div>
  );
};

export default Add;
