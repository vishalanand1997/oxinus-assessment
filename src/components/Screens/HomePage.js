import React from "react";
import { Link } from "react-router-dom";
import ScreenStyle from "./styles/Screen.module.css";

const homePageItems = [
  {
    title: "Menu",
    route: "/menu",
  },
  {
    title: "Favorites",
    route: "/favorites",
  },
  {
    title: "Random Meal",
    route: "/random-meal",
  },
];
const HomePage = () => {
  return (
    <div>
      <h1 className={ScreenStyle.titlePage}>Home Page</h1>
      <div>
        <ul className={ScreenStyle.itemContainer}>
          {homePageItems.map((item, index) => (
            <li key={`${item.title}-${index}`}>
              <Link to={item.route}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
