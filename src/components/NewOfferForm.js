import React, { useState } from 'react';

function NewOfferForm({ onAddNewOffer }) {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/produce_offerings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
  };

  return (
    <form className='new-offer-form' onSubmit={handleSubmit}>
      <input
        placeholder='Category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder='Quantity'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input type='submit' value='Post your produce offer!' />
    </form>
  );
}

export default NewOfferForm;
