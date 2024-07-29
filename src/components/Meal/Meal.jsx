import { Link } from "react-router-dom";
import "./Meal.css";

const Meal = ({ meal }) => {
  const { strMealThumb, strMeal, idMeal } = meal;
  return (
    <div className="meal-container">
      <img src={strMealThumb} alt="" />
      <h2>{strMeal}</h2>
      <Link to={`/meal/${idMeal}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default Meal;
