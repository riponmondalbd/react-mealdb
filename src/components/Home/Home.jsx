import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import "./Home.css";

const Home = () => {
  const { meals } = useLoaderData();
  return (
    <div className="home-container">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} meal={meal}></Meal>
      ))}
    </div>
  );
};

export default Home;
