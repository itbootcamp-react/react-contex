import React from "react";
import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import ToggleTheme from "./components/ThemeToggle.js";
import ThemeContextProvider from "./context/ThemeContext.js";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar />
        <BookList />
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
