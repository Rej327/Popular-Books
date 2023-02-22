import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
      // console.log(book, bookId);
      await axios.put(`http://localhost:4000/books/${bookId}`, book);
      // console.log(q);
      navigate("/");
      alert("New book succesfully updated!");
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

export default Update;
