import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //HasgRouter는 뒤에 #이 붙고 path가 붙음 대개로 BrowserRouter 사용
import Detail from "./routes/Detail";
import Home from "./routes/Home";

//이전에는 App이 모든 걸 다 하고 있었는데, App의 로직들을 분리시킴 

function App() {
  return (
    <Router> 
      <Switch> 
        <Route path={"/movie"}> 
          <Detail />
        </Route>

        <Route path="/" >
          <Home />
        </Route>
      </Switch> 
    </Router> //Switch는 Router를 찾고, 찾으면 렌더링함
  )
  
}

export default App;
