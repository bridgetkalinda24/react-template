// file: src/App.jsx

import Hello from "./components/Hello";
import Product from "./components/Product";
import Gig from "./components/Gig";
import ClickListener from "./components/ClickListener";
import InputLog from "./components/InputLog";
import Counter from "./components/Counter";
import Joke from "./components/Joke";
import makersLogo from "./assets/Home_Office-Logo.wine.png";
import brunoGaga from "./assets/Lady_Gaga_and_Bruno_Mars_-_Die_with_a_Smile.png";
import adele from "./assets/Adele-Pose-Transparent-PNG.png";

import "./App.css";
import React from "react";
import Post from "./Post";
import Profile from "./Profile";
import Recipe from "./Recipe";
import FormExample from "./FormExample";
import Todo from "./Todo";
import TodoList from "./TodoList";


function App() {
  return (
    <>
      <Hello name="Bree!" />
      <p>This is my first in-built App!</p>
      <img className="logo" src={makersLogo}></img>

      <Profile />

      <Gig
        gigname="Die With A Smile"
        image={brunoGaga}
        event="Event: Unmissable Concert!"
        date="Date: 16th July 2025 and Time: 2:00pm"
        location="Location: Tottenham Hotspur Stadium"
      />

      <Gig
        gigname="Adele 21"
        image={adele}
        event="Event: Adele Returns!"
        date="Date: 27th November 2025 and Time: 1:00pm"
        location="Location: Arsenal Stadium"
      />

      <Product 
        name="Air Fryer K2000"
        description="The best air fryer to fry all things, even Mars bars"
        price={2000}
      />

      <Product 
        name="Microwave M2023"
        description="New smart microwave, cooks in minutes"
        price={150}
      />

      <ClickListener />

      <InputLog />

      <Recipe 
        title="Finnish cinnamon buns"
        type="dessert"
        duration={60}
      />

      <Counter />

      <Post />

      <FormExample />
      
      <TodoList />

      <Todo />

      <Joke />

    </>
  );
}

export default App;
