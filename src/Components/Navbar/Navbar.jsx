import React, { useContext, useEffect, useState } from "react";
// import { viteLogo } from '/vite.svg';
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { foodContext } from "../../Context/FoodContext";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const nevigate = useNavigate();

  //FoodItemcontext
  const { foodData, setFoodData } = useContext(foodContext);
  const url = "https://api.spoonacular.com/recipes/complexSearch";
  const apiKey = import.meta.env.VITE_API_KEY;

  //state to maintain fooditem
  const [food, setFood] = useState("Pizza");

  //when page get loaded into window  get some data of pizza 
  useEffect(() => {
    getFoodsDetail();
  }, []);

  //geting food item data
  async function getFoodsDetail() {
    const dataFromUrl = await fetch(
      `${url}?query=${food}&apiKey=${apiKey}&number=30`
    );

    const foodDataInJSON = await dataFromUrl.json();

    setFoodData(foodDataInJSON.results);
    nevigate("/");
  }
  return (
    <div className="Navbar-container">
      <div className="RecipeApp">RecipeApp</div>
      <input
        className="inputBox"
        value={food}
        onChange={(e) => {
          setFood(e.target.value);
        }}
      />
      <FaSearch id="searchButton" onClick={getFoodsDetail} />
      <NavLink className={"home"} to={"/"}>
        Home
      </NavLink>
      <NavLink className={"recipe"} to={"/Recipe"}>
        Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;
