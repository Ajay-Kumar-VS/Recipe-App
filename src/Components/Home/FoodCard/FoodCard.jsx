import React, { useContext } from "react";
import {FoodRecipeContext} from '../../../Context/FoodRecipeContext'
import { useNavigate } from "react-router-dom";
import './FoodCard.css'

const FoodCard = ({ foodItem }) => {
  const nevigate=useNavigate()
  const { id, title, image } = foodItem;
  const {FoodRecipedata, setFoodRecipedata}=useContext(FoodRecipeContext)
  console.log(FoodRecipedata,"FoodRecipedata")
  const apiKey=import.meta.env.VITE_API_KEY

  const urlForRecipe=`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`
  async function  getRecipe(id){
    const dataFromUrl= await fetch(`${urlForRecipe}&apiKey=${apiKey}`)
    // console.log(dataFromUrl)
    const foodDataInJSON=await dataFromUrl.json()
    // console.log(foodDataInJSON)
    setFoodRecipedata([foodDataInJSON]);
    nevigate("/Recipe")
    // console.log(FoodRecipedata,"FoodRecipedata111")
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
        <button className="recipe-button" onClick={()=>{getRecipe(id)}}>Recipe</button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
