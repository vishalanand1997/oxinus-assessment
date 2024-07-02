import React from "react";
import { Link, useLocation } from "react-router-dom";
import ToggleNav from "./ToggleNav";
import NavigationStyle from "./Navigation.module.css";

const navItems = [
  {
    title: "Homepage",
    route: "/",
  },
  {
    title: "Menu",
    route: "/menu",
  },
  {
    title: "My Favorites",
    route: "/favorites",
  },
  {
    title: "Random Meal",
    route: "/random-meal",
  },
  {
    title: "About Me",
    route: "/about",
  },
];
const Navigation = () => {
  const location = useLocation();
  return (
    <ToggleNav>
      <nav className={NavigationStyle.sidebarListContainer}>
        <ul>
          {navItems.map((nav, index) => (
            <li key={`${nav.title}-${index}`}>
              <Link
                to={nav.route}
                className={
                  location.pathname === nav.route
                    ? NavigationStyle.sidebarListActive
                    : {}
                }
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </ToggleNav>
  );
};

export default Navigation;
