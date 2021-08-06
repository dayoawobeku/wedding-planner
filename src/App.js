import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Home from "./components/navbar/list-items/Home";
import About from "./components/navbar/list-items/About";
import Services from "./components/navbar/list-items/Services";
import NavLogo from "./components/navbar/list-items/NavLogo";
import Portfolio from "./components/navbar/list-items/Portfolio";
import Blog from "./components/navbar/list-items/Blog";
import Contact from "./components/navbar/list-items/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/" exact>
            <NavLogo />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
