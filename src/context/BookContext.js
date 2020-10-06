import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "prva knjiga", id: 1 },
    { title: "druga knjiga", id: 2 },
    { title: "treci knjiga", id: 3 },
    { title: "cetvrti knjiga", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
};

export default BookContextProvider;
