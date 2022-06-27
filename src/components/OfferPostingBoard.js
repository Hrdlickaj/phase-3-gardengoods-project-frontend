import React from 'react';
import Offer from './Offer.js';

function OfferPostingBoard({
  offers,
  users,
  currentUser,
  deleteOffer,
  decreaseQuantity,
}) {
  const offerPostings = offers.map((offer) => {
    return (
      <Offer
        offer={offer}
        currentUser={currentUser}
        onDeleteOffer={deleteOffer}
        onDecreaseQuantity={decreaseQuantity}
        users={users}
      />
    );
  });

  return <div className='offer-posting-board'>{offerPostings}</div>;
}

export default OfferPostingBoard;
