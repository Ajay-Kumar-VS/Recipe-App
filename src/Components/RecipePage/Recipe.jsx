import React, { useContext, useState } from "react";
import { FoodRecipeContext } from "../../Context/FoodRecipeContext";
// import Ingredients from './Ingredients/Ingredients'
import "./Recipe.css";
//analyzedInstructions
// extendedIngredients image instructions
// {<div>{instructions}</div>}
// readyInMinutes
// summary;

// vegetarian;
// title;

const Recipe = () => {
  const { FoodRecipedata, setFoodRecipedata } = useContext(FoodRecipeContext);
  console.log(FoodRecipedata, "from recipe");
  if (FoodRecipedata.length === 0) {
    return (
      <div className="no-data-info">
        <div>No data to show , search first </div>
      </div>
    );
  }
  const {
    analyzedInstructions,
    extendedIngredients,
    image,

    readyInMinutes,

    vegetarian,
    title,
  } = FoodRecipedata[0];
  return (
    <div className="recipe-container">
      <div className="title">
        <div>{title}</div>
      </div>
      <div className="img-and-info">
      <div>
      <img className="image-recipe" src={image} alt="Image not available" />
        <div className="info">
        <div className="readyInMinutes">ReadyIn: {readyInMinutes} Min</div>
        <div
          className="vegetarian"
          style={{ backgroundColor: vegetarian ? "#90EE90" : "#FF7F50" }}>
          {vegetarian ? "vegetarian" : "Non-vegetarian"}
        </div>
      </div></div>
        

        <div className="instruction">

        {analyzedInstructions[0].steps.map((steps) => {
          return (
            <div className="info-steps">
              <div id="step">step:{steps.number}</div>
              <div id="step-instruction">{steps.step}</div>
            </div>
          );
        })}
      </div>

      </div>

       

      

      <p id="Ingredients-Required">Ingredients Required</p>
      <div className=" ingredient-grid">
        {extendedIngredients.map((Ingredient) => {
            // console.log(Ingredient.image)
          return (
            <div  className='ingredient' key={Ingredient.id}>
            <img id="recipe-ingredient-img" src={`https://spoonacular.com/cdn/ingredients_100x100/${Ingredient.image}`} alt="image not available"/>
              <div className="ingredient-name">{Ingredient.name}</div>
              <div className="ingredient-quantity">
                {Ingredient.measures.metric.amount +" "+
                  Ingredient.measures.metric.unitShort}
                {}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipe;
