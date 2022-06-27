import React from 'react';
import Offer from './Offer.js';

function OfferPostingBoard({ offers, currentUser }) {
  const offerPostings = offers.map((offer) => {
    return <Offer key={offer.id} offer={offer} currentUser={currentUser} />;
  });

  return <div className='offer-posting-board'>{offerPostings}</div>;
}

export default OfferPostingBoard;
