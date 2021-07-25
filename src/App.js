// ! Importing Modules
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// ! Importing Components
import NavBar from "./Components/CommonComp/NavBar";
import Home from "./Components/Home/Home";
import RSA from "./Components/RSAAlgo/RSAAlgo";
import SHA from "./Components/SHAAlgo/Hashing";
import AES from "./Components/AESAlgo/AESAlgo";
import About from "./Components/About/About";
function App() {
  return (
    <Fragment>
      <NavBar />
      {/* Routers */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rsa" exact component={RSA} />
        <Route path="/hashing" exact component={SHA} />
        <Route path="/aesAlgo" exact component={AES} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Fragment>
  );
}

export default App;
