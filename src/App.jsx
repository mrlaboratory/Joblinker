import React from 'react';
import Header from './components/Header';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  const loc = useLocation()
  if(loc.state){
    document.title = `${loc.state} - Job Linkers`
  }



  return (
    <div className=''>
      <header className='bg-[#f9f9ff]'>
        <Header></Header>

      </header>

      <div className='min-h-[calc(100vh-128px)]'>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default App;