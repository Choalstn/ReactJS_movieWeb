import { func } from "prop-types";
import { useState, useEffect } from "react";

function Hello() {
  /**function Hello() {
    function byFn() {
      console.log("bye :(")
    }
  
    function hiFn() {
      console.log("created :)")
      return byFn;
    }
    useEffect(hiFn, [])
    return <h1>Hello</h1>
  }
  **/
 // 위 아래 동일한 결과를 나타내지만, 코드의 단순성에서 큰 차이
  
  useEffect(() => {
    console.log('hi :)')
    return () => {console.log("bye :(")}
  }, [])
  return <h1>Hello</h1>
}

function App() {
  const[showing, setShowing] = useState(false);

  const onClick = () => setShowing(!showing);


  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
