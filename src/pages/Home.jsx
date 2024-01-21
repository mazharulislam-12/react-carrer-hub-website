import React from 'react';
import Header from './Sheard/Header/Header';
import Navbar from './Sheard/Navbar/Navbar';
import LeftSideNav from './Sheard/LeftSideNav/LeftSideNav';
import RightSideNav from './Sheard/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import AllHome from './AllHome';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'> <LeftSideNav></LeftSideNav> </div>
                <div className='md:col-span-2'><AllHome></AllHome></div>
                <div className='border'><RightSideNav></RightSideNav></div>
            </div>

        </div>
    );
};

export default Home;