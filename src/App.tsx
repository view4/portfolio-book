import React from "react";

import Background from "./Components/Background";
import Reviews from "./Components/Reviews";
import Book from "./Components/Book";
import "./App.css";
import "./responsiveness.css";

//App Rendering
const App: React.FC = () => {
  return (
    <div className="App">
      <Background />
      {//<Reviews />
}
      <Book />
    </div>
  );
};

export default App;
