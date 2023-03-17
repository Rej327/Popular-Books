import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { btnStyle } from "../styles/styles";

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
        placeholder="Cover"
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
      <button onClick={handleClick} className={btnStyle.add}>
        Add Book
      </button>
      <button className={btnStyle.cancel}>
        <Link to="/">Cancel</Link>
      </button>
    </div>
  );
};

export default Add;
