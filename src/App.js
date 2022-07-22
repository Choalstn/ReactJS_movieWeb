import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; //HasgRouter는 뒤에 #이 붙고 path가 붙음 대개로 BrowserRouter 사용
import Detail from "./routes/Detail";
import Home from "./routes/Home";



function App() {
  return (
    <>
    <Router> 
      <Switch> 
        <Route path={"/movie/:id"}> 
          <Detail />
        </Route>

        <Route path="/" >
          <Home />
        </Route>
      </Switch> 
    </Router>
    </>
  )
  
}

export default App;
