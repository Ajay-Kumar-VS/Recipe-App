import { useContext, useState } from 'react';
import './Home.css';
import { foodContext } from '../../Context/FoodContext';
import FoodCard from './FoodCard/FoodCard';
import Pagination from './Pagination';


const Home = () => {
    const { foodData } = useContext(foodContext);
    const [currentPage, setCurrentPage] = useState(1);
    
    const foodItemPerPage = 5;
    const lastIndexOfFoodItem = currentPage * foodItemPerPage;
    const FirstIndexOfFoodItem = lastIndexOfFoodItem - foodItemPerPage;

    const totalPages = Math.ceil(foodData.length / foodItemPerPage);
    const currentPageFoodItems = foodData.slice(FirstIndexOfFoodItem, lastIndexOfFoodItem);

    

    return (
        <div className='home-container'>
            <div className='foodCards'>
            {currentPageFoodItems.map((foodItem) => (
                <FoodCard key={foodItem.id} foodItem={foodItem} />
            ))}
            </div>

           <div className='pagination-container'> <Pagination data={{currentPage,setCurrentPage,totalPages}}/>
           </div>
          
        </div>
    );
};

export default Home;
