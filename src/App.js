import React, { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      console.warn("multi Count");
      return count * 5;
    },
    [count]
  );

  return (
    <div className="App">
      <h1>UseMemo</h1>

      <h3>Count : {count}</h3>
      <h3>Items : {item}</h3>
      <h3>Multi Count: {multiCountMemo}</h3>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
      <button
        onClick={() => {
          setItem(item * 10);
        }}
      >
        Item
      </button>
    </div>
  );
}

export default App;
