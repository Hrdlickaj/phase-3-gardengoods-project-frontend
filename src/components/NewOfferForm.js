import React, { useState } from 'react';

function NewOfferForm({ onAddNewOffer, currentUser }) {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:9292/produce_offerings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: category,
        description: description,
        quantity: quantity,
      }),
    })
      .then((response) => response.json())
      .then((newOffer) => onAddNewOffer(newOffer));

    setCategory('');
    setDescription('');
    setQuantity('');
  }

  return (
    <div className='new-offer-form'>
      <h3>Post your extra produce!</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='category'
          placeholder='Category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type='text'
          name='description'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='number'
          name='quantity'
          step='1'
          placeholder='Quantity'
          value={quantity}
          onChange={(e) => setQuantity(parseFloat(e.target.value))}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewOfferForm;
