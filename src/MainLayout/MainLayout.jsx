import React from 'react';
import { Outlet } from 'react-router';

function MainLayout() {
  return (
    <div>
        <div className='max-w-6xl mx-auto'>
            <Outlet></Outlet>
        </div>
    </div>
  );
}

export default MainLayout;