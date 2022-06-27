import userEvent from '@testing-library/user-event';
import React from 'react';
import './Offer.css';

function Offer({
  id,
  category,
  description,
  quantity,
  gardener,
  onDeleteOffer,
}) {
  function handleDelete() {
    fetch(`http://localhost:9292/produce_offerings/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => onDeleteOffer(id));
  }

  return (
    <div className='offer'>
      <h3>
        Category:
        <br />
        {category}
      </h3>
      <h3>
        Description:
        <br />
        {description}
      </h3>
      <h3>
        Quantity:
        <br />
        {quantity}
      </h3>
      <h3>
        Gardener:
        <br />
        {gardener}
      </h3>
      <button className='offer_delete-button' onClick={handleDelete}>
        remove offer
      </button>
    </div>
  );
}

export default Offer;
