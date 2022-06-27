import React, { useState } from 'react';

function UserDropDownMenu({ users }) {
  const [user, setUser] = useState('friend');

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className='user-drop-down-menu'>
      <h3>Welcome, {user}!</h3>
      <br />

      <select onChange={handleUserChange}>
        <option value='friend'> Select a user </option>
        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserDropDownMenu;
