import React from "react";
import Book from "./Components/Book";
import "./App.css";

//App Rendering
const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        {/* <div className="nav-title">
          <h5> My portfolio </h5>
        </div> */}
      </header>
      <Book />
    </div>
  );
};

export default App;
