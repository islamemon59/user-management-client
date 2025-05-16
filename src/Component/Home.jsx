import React from 'react';
import AddUser from './AddUser';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header>
            </Header>
            <div className='my-10'>
                <AddUser></AddUser>
            </div>
        </div>
    );
};

export default Home;