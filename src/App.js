import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Screens/HomePage";
import Navigation from "./components/Navigation/Navigation";
import Menu from "./components/Screens/Menu";
import MenuCategory from "./components/Screens/MenuCategory";
import Favorites from "./components/Screens/Favorites";
import RandomMeal from "./components/Screens/RandomMeal";
import About from "./components/Screens/About";
import "./App.css";
import { MyContextProvider } from "./context/MyContext";

const App = () => {
  return (
    <MyContextProvider>
      <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:categoryName" element={<MenuCategory />} />
            <Route exact path="/favorites" element={<Favorites />} />
            <Route exact path="/random-meal" element={<RandomMeal />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </MyContextProvider>
  );
};

export default App;
