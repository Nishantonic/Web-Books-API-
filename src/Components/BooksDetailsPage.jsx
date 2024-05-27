import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://softwium.com/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error("Error fetching book details:", error));
  }, [id]);

  if (!book) {
    return (
      <div className="flex justify-center items-center text-9xl text-red-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex justify-center bg-blue-300 items-center relative ">
      <div className=" flex flex-col   h-4/5  w-4/6 md:w-2/5   bg-white transform-style rotate-y-180 animate-open-book relative  p-5">
        <h1 className=" relative text-4xl text-bold  text-blue-900 font-bold underline flex justify-center items-center p-2 m-1 ">
          {`Book Details of Id: ${id}`}
        </h1>
        <h1 className="p ">
          <strong>Title:</strong> {book.title}
        </h1>
        <p className="p">
          <strong>ISBN:</strong> {book.isbn}
        </p>
        <p className="p">
          <strong>Page Count:</strong> {book.pageCount}
        </p>
        <p className="p">
          <strong>Authors:</strong> {book.authors.join(", ")}
        </p>
        <Link to="/books">
          <button className="absolute bg-blue-500 text-white h-8 w-24  rounded-2xl flex justify-center text-2xl items-center right-5 bottom-5 hover:bg-blue-900  hover:text-slate-100">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookDetailPage;

{
  /* <div>
<h1>{book.title}</h1>
<p>
  <strong>ISBN:</strong> {book.isbn}
</p>
<p>
  <strong>Page Count:</strong> {book.pageCount}
</p>
<p>
  <strong>Authors:</strong> {book.authors.join(", ")}
</p>
</div> */
}
