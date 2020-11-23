import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Dashboard from "../Component/Dashboard";
import Register from "../Component/Register"
import Login from "../Component/Login";
import Home from "../Component/Home"
import Ledger from "../Component/Ledger"



function Routes(props) {
    return (
      <>
        <Switch>    
          <Route path="/" exact component={Home} />
          <Route path="/register" render={() => <Register />} />
          <Route path="/login" render={()=><Login {...props}/>} />
          <Route path="/dashboard" exact render={() => <Dashboard />} />          
          <Route path="/ledger" render={(props)=><Ledger {...props} />} />           
          <Route>
            <div>Error 404 </div>
            <Link to="/">GO BACK HOME</Link>
          </Route>
        </Switch>
      </>
    );
  }
  
  export { Routes };