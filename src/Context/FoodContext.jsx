import { createContext, useState } from "react";

const foodContext = createContext(null);


//creating context and context provider for FoodItem 
const FoodContextProvider = (props) => {
  const { children } = props;
  const [foodData, setFoodData] = useState([]);

  return (
    <div>
      <foodContext.Provider value={{ foodData, setFoodData }}>
        {children}
      </foodContext.Provider>
    </div>
  );
};

export { FoodContextProvider, foodContext };
