import React, { createContext, useState } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './Form';
import Form2 from './Form2';
import DigiClock from "./DigiClock";
import Clock from 'react-digital-clock';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import ToDoList from "./ToDoList";
import Profileclass from './Profileclass';
import ComA from './ComA';
import {Switch, Route} from "react-router-dom";
import Contact from './Contact';
import About from './About';
import  Menu  from './Menu';
import Service from './Service';
import User from './User';
import Search from "./Search";

const FirstName = createContext();
const LastName = createContext();

const App = () => {

  return (
    <>
      <Menu />    
      <Switch>
        <Route exact path="/" component={()=><About name="About" />} />
        <Route exact path="/contact" component={()=><Contact name="Contact" />} />
        <Route exact path="/service" render={()=><Service name="Service" />} />
        <Route path="/user/:name" component={User} />
        <Route path="/search" component={Search} />
      </Switch>



      {/* <FirstName.Provider value={"Manthan"}>
        <LastName.Provider value={"Patel"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider> */}
      {/* <ToDoList /> */}
      {/* <Clock /> */}
      {/* <DigiClock /> */}
      {/* <Form /> */}
      {/* <Form2 /> */}
      {/* <CountdownCircleTimer
    isPlaying
    duration={10}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer> */}

      {/* <Profileclass /> */}
    </>
  )
}

export default App;
export { FirstName, LastName };