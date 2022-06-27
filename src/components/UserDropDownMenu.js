import React, { useState } from 'react';

function UserDropDownMenu({ users, currentUser, onUserChange }) {
  function handleUserChange(e) {
    let selectedUser = e.target.value;
    onUserChange(selectedUser);
  }

  return (
    <div className='user-drop-down-menu'>
      <h3>Welcome, {currentUser}!</h3>
      <br />

      <select onChange={handleUserChange}>
        <option value='friend'> Select a user </option>
        {users.map((currentUser) => (
          <option key={currentUser.id} value={currentUser.name}>
            {currentUser.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserDropDownMenu;
