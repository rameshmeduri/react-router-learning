import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='main-container'>
      <h1>Home</h1>
      <Link className='button' to='/contact'>Contact</Link>
    </div>
  );
};

export default Home;