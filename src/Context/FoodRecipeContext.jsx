import { createContext, useState } from "react";

const FoodRecipeContext = createContext();

//creating context and context provider for FoodItem recipe 

const FoodRecipeContextProvider = (props) => {
  const { children } = props;
  const [FoodRecipedata, setFoodRecipedata] = useState([]);

  return (
    <div>
      <FoodRecipeContext.Provider value={{ FoodRecipedata, setFoodRecipedata }}>
        {children}
      </FoodRecipeContext.Provider>
    </div>
  );
};

export { FoodRecipeContextProvider, FoodRecipeContext };
