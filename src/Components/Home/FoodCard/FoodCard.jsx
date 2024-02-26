import React, { useContext } from "react";
import { FoodRecipeContext } from "../../../Context/FoodRecipeContext";
import { useNavigate } from "react-router-dom";
import "./FoodCard.css";

const FoodCard = ({ foodItem }) => {
  const nevigate = useNavigate();
  const { id, title, image } = foodItem;

  //using context to get data
  const { FoodRecipedata, setFoodRecipedata } = useContext(FoodRecipeContext);

  //Api key of spoonacular.com
  const apiKey = import.meta.env.VITE_API_KEY;

  const urlForRecipe = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`;

  // fetching recipe data from spoonacular.com
  async function getRecipe(id) {
    const dataFromUrl = await fetch(`${urlForRecipe}&apiKey=${apiKey}`);

    //parsing to JSON format
    const foodDataInJSON = await dataFromUrl.json();

    // add  the data to Recipe Context
    setFoodRecipedata([foodDataInJSON]);

    // after this nevigating to Recipe page
    nevigate("/Recipe");
  }

  return (
    <>
      <div className="Foodcard-main">
        <div>
          <img className="img" src={image} />
        </div>
        <div className="card-container">
          <div className="card-title">{title}</div>
        </div>
        <div className="button-container">
          <button
            className="recipe-button"
            onClick={() => {
              getRecipe(id);
            }}>
            Recipe
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
