import userEvent from '@testing-library/user-event';
import React from 'react';

function Offer({
  id,
  category,
  description,
  quantity,
  gardener,
  onDeleteOffer,
  onDecreaseQuantity,
  currentUser,
}) {
  function handleDelete() {
    fetch(`http://localhost:9292/produce_offerings/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => onDeleteOffer(id));
  }

  function handleDecreaseQuantity() {
    quantity -= 1;

    fetch(`http://localhost:9292/produce_offerings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: category,
        quantity: quantity,
        description: description,
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
        <em>{category}</em>
      </h3>
      <h3>
        Description:
        <br />
        <em>{description}</em>
      </h3>
      <h3>
        Quantity:
        <br />
        <em>{quantity}</em>
      </h3>
      <h3>
        Gardener:
        <br />
        <em>{gardener}</em>
      </h3>
      <button
        className='offer_decrease-quantity-button'
        onClick={handleDecreaseQuantity}
      >
        decrease quantity
      </button>
      <button className='offer_delete-button' onClick={handleDelete}>
        remove offer
      </button>
    </div>
  );
}

export default Offer;
