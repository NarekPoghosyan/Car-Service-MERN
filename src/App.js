import React from "react";
import Title from "./Components/Header/Title/Title";
import Cars from "./Components/Cars/Cars";
import Add from "./Components/AddCar_Page/Add";
import Update from "./Components/Update_Page/Update";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Title />
            <Cars />
          </Route>
        </Switch>
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
        <Switch>
          <Route path="/update">
            <Update />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
