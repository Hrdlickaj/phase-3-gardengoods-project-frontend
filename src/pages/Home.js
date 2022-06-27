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

  function handleAddNewOffer(newOffer) {
    const updatedOfferArray = [...offers, newOffer];
    setOffers(updatedOfferArray);
  }

  function handleDeleteOffer(deletedOffer) {
    const reducedOfferArray = offers.filter(
      (offer) => offer.id !== deletedOffer
    );
    setOffers(reducedOfferArray);
  }

  function handleDecreaseQuantity(updatedQuantity) {
    const adjustedOfferArray = offers.map((offer) =>
      offer.id === updatedQuantity.id ? updatedQuantity : offer
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
      <NewOfferForm
        onAddNewOffer={handleAddNewOffer}
        currentUser={currentUser}
      />
      <OfferPostingBoard
        offers={offers}
        currentUser={currentUser}
        deleteOffer={handleDeleteOffer}
        decreaseQuantity={handleDecreaseQuantity}
      />
    </div>
  );
}

export default Home;
