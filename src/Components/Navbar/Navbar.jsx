import React, {useContext, useEffect, useState } from "react";
// import { viteLogo } from '/vite.svg';
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { foodContext } from "../../Context/FoodContext";
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {
  const nevigate=useNavigate()
    const { foodData, setFoodData } = useContext(foodContext);
    const url="https://api.spoonacular.com/recipes/complexSearch"
    const apiKey=import.meta.env.VITE_API_KEY
    const [food,setFood]= useState("Pizza")
    useEffect(()=>{
        getFoodsDetail()
    },[])
    
    async function  getFoodsDetail(){
        const dataFromUrl= await fetch(`${url}?query=${food}&apiKey=${apiKey}&number=30`)
        // console.log(dataFromUrl)
        const foodDataInJSON=await dataFromUrl.json()
        // console.log(foodDataInJSON)
        setFoodData(foodDataInJSON.results);
        nevigate("/")
        
   }
  return (
    <div className="Navbar-container">
      <div className="RecipeApp">RecipeApp</div>
      <input className="inputBox" value={food} onChange={(e)=>{setFood(e.target.value)}}/>
      <FaSearch id="searchButton" onClick={getFoodsDetail} />
      <NavLink className={"home"} to={'/'}>Home</NavLink>
      <NavLink  className={"recipe"} to={'/Recipe'}>Recipe</NavLink>


      
    </div>
  );
};

export default Navbar;
