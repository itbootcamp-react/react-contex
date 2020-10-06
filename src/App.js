import React from "react";
import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import ToggleTheme from "./components/ThemeToggle.js";
import ThemeContextProvider from "./context/ThemeContext.js";
import AuthContextProvider from "./context/AuthContext.js";
import BookContextProvider from "./context/BookContext.js";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
