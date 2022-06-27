import React, { useState, useEffect } from 'react';
import Header from '../components/Header.js';
import Instructions from '../components/Instructions.js';
import UserDropDownMenu from '../components/UserDropDownMenu.js';
import NewOfferForm from '../components/NewOfferForm.js';
import OfferPostingBoard from '../components/OfferPostingBoard.js';
import './Home.css';

function Home() {
  const [offers, setOffers] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState('friend');

  useEffect(() => {
    fetch('http://localhost:9292/produce_offerings')
      .then((response) => response.json())
      .then(setOffers);
  }, []);

  useEffect(() => {
    fetch('http://localhost:9292/users')
      .then((response) => response.json())
      .then(setUsers);
  }, []);

  function onUserChange(selectedUser) {
    setCurrentUser(selectedUser);
  }

  return (
    <div className='home'>
      <Header />
      <UserDropDownMenu
        users={users}
        onUserChange={onUserChange}
        currentUser={currentUser}
      />
      <Instructions />
      <NewOfferForm />
      <OfferPostingBoard offers={offers} />
    </div>
  );
}

export default Home;
