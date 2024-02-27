import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import { Outlet} from "react-router";

import { FoodContextProvider } from "./Context/FoodContext.jsx";
import { FoodRecipeContextProvider } from "./Context/FoodRecipeContext.jsx";
import { Suspense } from "react";
const Loading = () => <div><h2 style={{textAlign:"center"}}>Loading...</h2></div>;

function App() {
  return (
    <div className="app">
      <FoodContextProvider>
        <FoodRecipeContextProvider>
          <Navbar />
          <Suspense fallback={<Loading/>}>
            <Outlet />
          </Suspense>
        </FoodRecipeContextProvider>
      </FoodContextProvider>
    </div>
  );
}

export default App;
