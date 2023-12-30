import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <h3>Hello from main</h3>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;