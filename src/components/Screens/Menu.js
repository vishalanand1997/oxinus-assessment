import React, { useEffect, useState } from "react";
import ScreenStyle from "./styles/Screen.module.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const navigate = useNavigate();
  const handleCategory = (categoryName) => {
    navigate(`/menu/${categoryName}`);
  };

  const fetchAllCategories = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((response) => setCategoriesList(response.categories))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchAllCategories();
  }, []);
  return (
    <div>
      <h1 className={ScreenStyle.titlePage}>Menu</h1>
      <div className={ScreenStyle.menuContainer}>
        <ul className={ScreenStyle.itemContainerMenu}>
          {categoriesList.map((list, index) => (
            <li
              key={`${list.idCategory}-${index}`}
              onClick={() => handleCategory(list.strCategory)}
            >
              <img
                src={list.strCategoryThumb}
                alt={list.strCategory}
                width={"50"}
                height={"50"}
              />
              {list.strCategory}
              <div></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
