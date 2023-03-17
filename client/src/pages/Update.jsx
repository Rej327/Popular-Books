import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { btnStyle } from "../styles/styles";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    cover: "",
    description: "",
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //navigation to homepage when success
  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/books/${bookId}`, book);
      navigate("/");
      alert("The book succesfully updated!");
    } catch (err) {
      alert("The book is not succesfully updated!");
    }
  };

  return (
    <div className="addBook-form">
      <h1 className="heading">Update the Book</h1>
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
        placeholder="Description"
        onChange={handleChange}
        name="description"
        required=""
      />
      <button onClick={handleClick} className={btnStyle.add}>
        Update Book
      </button>
      <button className={btnStyle.cancel}>
        <Link to="/">Cancel</Link>
      </button>
    </div>
  );
};

export default Update;
