import { createContext ,useState} from "react";

const FoodRecipeContext = createContext();

const FoodRecipeContextProvider = (props) => {
  const { children } = props;
  const [FoodRecipedata, setFoodRecipedata] = useState([]);

  return (
    <div>
      <FoodRecipeContext.Provider value={{ FoodRecipedata, setFoodRecipedata }}>{children}</FoodRecipeContext.Provider>
    </div>
  );
};

export { FoodRecipeContextProvider, FoodRecipeContext };
