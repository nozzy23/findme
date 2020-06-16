import React, { Component } from 'react';
import './css/App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Dashboardpage from "./pages/Dashboard/Dashboardpage.js";
import Registerpage from "./pages/Registercarpage/Registercarpage.js";
import GlobalContext,{initialState} from './component/context';
import Signup from "./component/signup"
import Login from "./component/Login.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Parkinglot from "./Parkinglot/Parking";

const App=()=>{
  const savedState=localStorage.getItem("state");

    const [globalState,dispatch]=React.useReducer(reducer,savedState?JSON.parse(savedState):initialState);
    return <GlobalContext.Provider value={{globalState,dispatch}}><div className="App">
    <header className="App-header">
    <Router><Switch>
     {!globalState.currentAccount&&[ <Route exact path="/" component={Login}/>,
      <Route exact path="/signup" component={Signup}/>]}
      {globalState.currentAccount&&
      [
      
      <Route exact path="/register" component={Registerpage}/>,
      <Route exact path="/lot" component={Parkinglot}/>,
      <Route component={Dashboardpage}/>
      ]}
      </Switch>
      </Router>
    </header>
  </div>
  </GlobalContext.Provider>
}

const reducer=(state,action)=>{
  if(action.type==="signup"){
      const newState={
          ...state,
          usersList:[...state.usersList,action.payload],
          currentAccount:action.payload.username
      };
     
      
      return newState;
      }else if (action.type==="login"){
        debugger
          const newState={
              ...state,
              currentAccount:action.payload.username
          };
          return newState;
      }
      return state;
  }



export default App;