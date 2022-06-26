import React from 'react';
import Offer from './Offer.js';

function OfferPostingBoard({ offers }) {
  const offerPostings = offers.map((offer) => {
    return <Offer key={offer.id} offer={offer} />;
  });

  return <div className='offer-posting-board'>{offerPostings}</div>;
}

export default OfferPostingBoard;
