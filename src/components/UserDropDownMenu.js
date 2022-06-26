import React, { useState } from 'react';

function UserDropDownMenu() {
  let users = [
    { label: 'Jenna', value: 'Jenna' },
    { label: 'Ari', value: 'Ari' },
    { label: 'Nate', value: 'Nate' },
  ];

  let [user, setUser] = useState('Select a user');

  let handleUserChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className='user-drop-down-menu'>
      {user}
      <br />

      <select onChange={handleUserChange}>
        <option value='Select a user'> Select a user </option>
        {users.map((user) => (
          <option key={user.label} value={user.value}>
            {user.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserDropDownMenu;
