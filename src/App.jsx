import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import { Outlet} from "react-router";

import { FoodContextProvider } from "./Context/FoodContext.jsx";
import { FoodRecipeContextProvider } from "./Context/FoodRecipeContext.jsx";

function App() {
  return (
    <div className="app">
      <FoodContextProvider>
        <FoodRecipeContextProvider>
          <Navbar />
          <Outlet />
        </FoodRecipeContextProvider>
      </FoodContextProvider>
    </div>
  );
}

export default App;
