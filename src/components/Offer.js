import userEvent from '@testing-library/user-event';
import React from 'react';

function Offer({ offer, onDeleteOffer, onDecreaseQuantity, currentUser }) {
  function handleDelete() {
    fetch(`http://localhost:9292/produce_offerings/${offer.id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => onDeleteOffer(offer.id));
  }

  function handleDecreaseQuantity() {
    offer.quantity -= 1;

    fetch(`http://localhost:9292/produce_offerings/${offer.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: offer.category,
        quantity: offer.quantity,
        description: offer.description,
      }),
    })
      .then((response) => response.json())
      .then((updatedQuantity) => onDecreaseQuantity(updatedQuantity));
  }

  return (
    <div className='offer'>
      <h3>
        Category:
        <br />
        <em>{offer.category}</em>
      </h3>
      <h3>
        Description:
        <br />
        <em>{offer.description}</em>
      </h3>
      <h3>
        Quantity:
        <br />
        <em>{offer.quantity}</em>
      </h3>
      {/*
      <h3>
        Gardener:
        <br />
        <em>{ }</em>
      </h3>*/}
      {currentUser.id === offer.user_id ? (
        <button
          className='offer_decrease-quantity-button'
          onClick={handleDecreaseQuantity}
        >
          {' '}
          decrease quantity{' '}
        </button>
      ) : null}
      {currentUser.id === offer.user_id ? (
        <button className='offer_delete-button' onClick={handleDelete}>
          {' '}
          remove offer{' '}
        </button>
      ) : null}
    </div>
  );
}

export default Offer;
