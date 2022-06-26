import userEvent from '@testing-library/user-event';
import React from 'react';

function Offer({ offer, user }) {
  return (
    <div>
      <h3>Category: {offer.category}</h3>
      <h3>Description: {offer.description}</h3>
      <h3>Quantity: {offer.quantity}</h3>
      <h3>Gardener: </h3>
    </div>
  );
}

export default Offer;
