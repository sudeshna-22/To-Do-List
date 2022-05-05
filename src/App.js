import Nav from './components/Nav';
import Todopage from './pages/Todopage';
import AboutPage from './pages/AboutPage';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
    <Switch>
      <Route exact path="/">
        <Todopage />
      </Route>

      <Route path="/about">
        <AboutPage />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
