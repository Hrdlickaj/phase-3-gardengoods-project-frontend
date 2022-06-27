import userEvent from '@testing-library/user-event';
import React from 'react';
import './Offer.css';

function Offer({ offer }) {
  return (
    <div className='offer'>
      <h3>Category: {offer.category}</h3>
      <h3>Description: {offer.description}</h3>
      <h3>Quantity: {offer.quantity}</h3>
      <h3>Gardener: </h3>
      <button className='offer_delete-button'>delete offer</button>
      <button className='offer_delete-button'>edit offer</button>
    </div>
  );
}

export default Offer;
