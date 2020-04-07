import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavbarWrapper from "./components/navbar/Navbar";
import About from "./components/about/About";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Account from "./components/account/Account";

function App() {
  return (
    <>
      <NavbarWrapper />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Account} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
