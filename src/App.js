import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue(counter + 1);
  console.log("I run all the time");
  const iRunOnlyOnce = () => console.log('I run only once');
  useEffect(() => {console.log("Call the API")}, [] )
  return (
    <div>
      <h1 >{counter}</h1>
      <button onClick={onClick}>Click me</button>
      </div>
  );
}

export default App;
