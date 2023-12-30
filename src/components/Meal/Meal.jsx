import React from 'react';
import './Meal.css'
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { strMeal, strMealThumb, strArea, idMeal } = meal;
    return (
        <div className='meal-details'>
            <img src={strMealThumb} alt="" />
            <h3>Name: {strMeal}</h3>
            <p>Area: {strArea}</p>
            <button className='btn-details'><Link to={`/meal/${idMeal}`}>Details</Link></button>
        </div>
    );
};

export default Meal;