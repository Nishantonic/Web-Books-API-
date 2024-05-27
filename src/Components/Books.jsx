import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  useEffect(() => {
    fetch("http://softwium.com/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="h-screen flex justify-center bg-blue-300 items-center relative ">
      <div className=" flex flex-col justify-center  h-4/5 w-4/7 md:w-2/5 bg-white transform-style rotate-y-180 animate-open-book absolute  p-1">
        <h1 className=" text-4xl text-bold top-6 text-blue-900 font-bold underline flex justify-center items-center p-3">
          Books Title
        </h1>

        <Link to="/">
          <button className="absolute bg-blue-500 text-white h-8 w-16  rounded-2xl flex justify-center text-md items-center right-5 top-5 hover:bg-blue-900  hover:text-slate-100">
            Home
          </button>
        </Link>
        <ul className=" m-2 p-5 text-lg text-blue-800 overflow-scroll list-disc">
          {books.map((book) => (
            <li
              className="flex overflow-visible flex-wrap hover:underline hover:text-black hover:text-xl"
              key={book.id}
            >
              <Link className="" to={`/books/${book.id}`}>
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Books;

{
  /* <div>
      <h1>Books Title</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {/* {book.title} 
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div> */
}
