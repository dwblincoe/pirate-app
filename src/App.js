import "./App.scss";

import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";
import Shop from "./components/shop";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
