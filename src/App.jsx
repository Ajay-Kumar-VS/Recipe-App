
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Recipe from './Components/RecipePage/Recipe';
import { Outlet, Route, Routes } from 'react-router';

import { FoodContextProvider } from "./Context/FoodContext.jsx";
import { FoodRecipeContextProvider } from "./Context/FoodRecipeContext.jsx";

function App() {


  return (

    <div className='app'>
    <FoodContextProvider>
  <FoodRecipeContextProvider>
    <Navbar/>
    <Outlet/>
    </FoodRecipeContextProvider>
    </FoodContextProvider>
    </div>

    
  )
}

export default App
