import { useContext, useState } from "react";
import "./Home.css";
import { foodContext } from "../../Context/FoodContext";
import FoodCard from "./FoodCard/FoodCard";
import Pagination from "./Pagination";

const Home = () => {
  // FoodData context using
  const { foodData } = useContext(foodContext);

  //state to monitor which is currentPage which is use for pagination
  const [currentPage, setCurrentPage] = useState(1);

  //no. of items per page
  const foodItemPerPage = 5;
  //last item index of current page
  const lastIndexOfFoodItem = currentPage * foodItemPerPage;

  //first item index of current page
  const FirstIndexOfFoodItem = lastIndexOfFoodItem - foodItemPerPage;

  //total pages will be
  const totalPages = Math.ceil(foodData.length / foodItemPerPage);

  //slice the fooddata into new array which contains the data od foodItem which will be get shown on 1 single pag ie currentPage
  const currentPageFoodItems = foodData.slice(
    FirstIndexOfFoodItem,
    lastIndexOfFoodItem
  );

  return (
    <div className="home-container">
      <div className="foodCards">
        {currentPageFoodItems.map((foodItem) => (
          <FoodCard key={foodItem.id} foodItem={foodItem} />
        ))}
      </div>

      <div className="pagination-container">
        {" "}
        <Pagination data={{ currentPage, setCurrentPage, totalPages }} />
      </div>
    </div>
  );
};

export default Home;
