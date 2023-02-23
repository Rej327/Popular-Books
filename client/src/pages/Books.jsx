import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { btnStyle, dataStyle } from "../styles/styles";

const Books = () => {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4000/books/");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:4000/books/" + id);
      window.location.reload();
      alert("Book deleted succesfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full px-2">
      <h1 className={dataStyle.hero}>
        From the 17th century to the late 90's, I covered the classics
      </h1>
      <div className={dataStyle.dataSection}>
        {Books.map((book) => (
          <div className={dataStyle.dataContainer} key={book.id}>
            {book.cover && (
              <img
                src={book.cover}
                alt={book.title}
                className={dataStyle.cover}
              />
            )}
            <h1 className={dataStyle.title}>{book.title}</h1>
            <h1 className={dataStyle.author}>by {book.author}</h1>
            <p className={dataStyle.description}>{book.description}</p>
            <button className={btnStyle.update}>
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
            <button
              onClick={() => handleDelete(book.id)}
              className={btnStyle.delete}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
