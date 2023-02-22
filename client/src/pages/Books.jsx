import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <h1 className="text-3xl px-2 border-b border-black w-fit mx-auto">
        From the 17th century to the late 90's, I covered the classics
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 max-w-[70rem] mx-auto justify-center text-center">
        {Books.map((book) => (
          <div className="borders mx-auto w-[20rem] p-5" key={book.id}>
            {book.cover && (
              <img
                src={book.cover}
                alt={book.title}
                className="mx-auto w-[220px] h-[331px]"
              />
            )}
            <h1 className="text-2xl pt-2">{book.title}</h1>
            <h1 className="text-gray-500 pb-2 font-semibold tracking-wider">
              by {book.author}
            </h1>
            <p className="text-gray-600">{book.description}</p>
            <button
              className="w-24 bg-blue-600 mx-2 py-2 mt-5 text-white hover:bg-opacity-70
        "
            >
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
            <button
              onClick={() => handleDelete(book.id)}
              className="w-24 bg-red-600 mx-2 py-2 mt-5 text-white hover:bg-opacity-70
        "
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
