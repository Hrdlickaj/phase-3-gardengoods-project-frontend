import React from 'react';

function UserDropDownMenu({ users, currentUser, onUserChange }) {
  function handleUserChange(e) {
    const selectedUser = e.target.value;
    onUserChange(selectedUser);
  }

  return (
    <div className='user-drop-down-menu'>
      <h3>Welcome, {currentUser}!</h3>
      <br />

      <select onChange={handleUserChange}>
        <option> Select a user </option>
        {users.map((currentUser) => (
          <option key={currentUser.id}>{currentUser.name}</option>
        ))}
      </select>
    </div>
  );
}

export default UserDropDownMenu;
