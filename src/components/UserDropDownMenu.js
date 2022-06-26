import React, { useState } from 'react';

function UserDropDownMenu({ users }) {
  const [user, setUser] = useState('Select a user');

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className='user-drop-down-menu'>
      {user}
      <br />

      <select onChange={handleUserChange}>
        <option value='Select a user'> Select a user </option>
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
