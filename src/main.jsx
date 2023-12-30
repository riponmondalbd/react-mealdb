import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Meals from './components/Meals/Meals.jsx'
import MealDetails from './components/MealDetails/MealDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Meals />,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s'),
      },
      {
        path: 'meal/:mealId',
        element: <MealDetails />,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
      },
      {
        path: 'about',
        element: <div></div>,
      },
      {
        path: 'contact',
        element: <div></div>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
