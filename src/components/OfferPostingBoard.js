import React from 'react';
import Offer from './Offer.js';

function OfferPostingBoard({
  offers,
  currentUser,
  deleteOffer,
  decreaseQuantity,
}) {
  const offerPostings = offers.map((offer) => {
    return (
      <Offer
        key={offer.id}
        id={offer.id}
        category={offer.category}
        description={offer.description}
        quantity={offer.quantity}
        gardener={offer.user_id}
        currentUser={currentUser}
        onDeleteOffer={deleteOffer}
        onDecreaseQuantity={decreaseQuantity}
      />
    );
  });

  return <div className='offer-posting-board'>{offerPostings}</div>;
}

export default OfferPostingBoard;
