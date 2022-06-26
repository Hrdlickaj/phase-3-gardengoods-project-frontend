import React from 'react';
import NewOfferForm from '../components/NewOfferForm.js';
import Header from '../components/Header.js';
import UserDropDownMenu from '../components/UserDropDownMenu.js';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Header />
      <UserDropDownMenu />
    </div>
  );
}

export default Home;
