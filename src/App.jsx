import { puppyList } from "./data.js";
import "./App.css";
import { useState } from "react";

function App() {
  console.log(useState(puppyList));

  const [puppies, setPuppies] = useState(puppyList);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
