import React from 'react';
import './Meals.css'
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const { meals } = useLoaderData();
    // console.log(meals);
    return (
        <div>
            <h2>Welcome to Meal DB</h2>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;