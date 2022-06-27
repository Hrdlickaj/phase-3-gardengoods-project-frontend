import React from 'react';

function UserDropDownMenu({ users, currentUser, onUserChange }) {
  function handleUserChange(e) {
    //console.log(typeof e.target.value);
    const selectedUser = e.target.value;
    onUserChange(selectedUser);
  }

  return (
    <div className='user-drop-down-menu'>
      <h3 className='user-drop-down-menu_h3'>
        Welcome, {currentUser.name}! 🌱
      </h3>
      <br />
      <select value={currentUser} onChange={handleUserChange}>
        <option> Select a user </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserDropDownMenu;
