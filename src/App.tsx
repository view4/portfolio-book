import React from "react";
import Book from "./Components/Book";
import "./App.css";

import Review from "./Components/Review"

//App Rendering
const App: React.FC = () => {
  return (
    <div className="App">
      {/*<header>
         <div className="nav-title">
          <h5> My portfolio </h5>
        </div> 
      </header>*/}
      <Book />
      <div  className={"background-screen-one"} />
      <div  className={"background-screen-two"} />
      <Review />
      
    </div>
  );
};

export default App;
