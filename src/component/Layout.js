import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';


const Layout = () => {
  return (
    <div className="layout">
      <Header />
        <main>
          <Outlet /> {/* Renders the matching child route */}
        </main>
      </div>
    
  );
};

export default Layout;