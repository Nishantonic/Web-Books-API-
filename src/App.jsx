import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Books from "./Components/Books";
import BookDetailPage from "./Components/BooksDetailsPage";
import BookAnimation from "./Components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BookAnimation />,
    },
    {
      path: "/books",
      element: <Books />,
    },
    {
      path: "/books/:id",
      element: <BookDetailPage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
