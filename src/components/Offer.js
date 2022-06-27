import React from 'react';
import './Offer.css';

function Offer({ offer, onDeleteOffer, onEditOffer }) {
  function handleDelete() {
    fetch(`http://localhost:9292/produce_offerings/${offer.id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((deletedOffer) => onDeleteOffer(deletedOffer));
  }

  return (
    <div className='offer'>
      <h3>
        Category:
        <br />
        {offer.category}
      </h3>
      <h3>
        Description:
        <br />
        {offer.description}
      </h3>
      <h3>
        Quantity:
        <br />
        {offer.quantity}
      </h3>
      <h3>
        Gardener:
        <br />
      </h3>
      <button className='offer_delete-button' onClick={handleDelete}>
        delete offer
      </button>
    </div>
  );
}

export default Offer;
