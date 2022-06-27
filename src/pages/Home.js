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
  const [currentUser, setCurrentUser] = useState([]);

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

  function updateCurrentUser(selectedUser) {
    setCurrentUser(selectedUser);
  }

  function handleOffer(newOffer) {
    const updatedOfferArray = [...offers, newOffer];
    setOffers(updatedOfferArray);
  }

  function handleOnDeleteOffer(deletedOffer) {
    const adjustedOfferArray = offers.filter(
      (offer) => offer.id !== deletedOffer
    );
    setOffers(adjustedOfferArray);
  }

  return (
    <div className='home'>
      <Header />
      <UserDropDownMenu
        users={users}
        onUserChange={updateCurrentUser}
        currentUser={currentUser}
      />
      <Instructions />
      <NewOfferForm onAddNewOffer={handleOffer} currentUser={currentUser} />
      <OfferPostingBoard
        offers={offers}
        currentUser={currentUser}
        deleteOffer={handleOnDeleteOffer}
      />
    </div>
  );
}

export default Home;
