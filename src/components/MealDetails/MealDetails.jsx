import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MealDetails = () => {
    const mealDetails = useLoaderData();
    const { strArea, strMeal, strInstructions, strMealThumb, strSource } = mealDetails.meals[0];
    // console.log(mealDetails.meals[0]);


    return (
        <div>
            <img src={strMealThumb} alt="" />
            <h2>Name: {strMeal}</h2>
            <p>Area: {strArea}</p>
            <p>{strInstructions}</p>
            <Link target='_blank' to={strSource}>Details Blog</Link>
        </div>
    );
};

export default MealDetails;