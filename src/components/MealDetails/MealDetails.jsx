import { Link, useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const meal = useLoaderData();
  //   console.log(meal.meals[0]);
  const { strMealThumb, strMeal, strInstructions } = meal.meals[0];
  return (
    <div>
      <img src={strMealThumb} alt="" />
      <h2>{strMeal}</h2>
      <p>{strInstructions}</p>
      <Link to={-1}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default MealDetails;
