import React, { useState } from 'react';

import './AddFriendForm.scss';

const AddFriendForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(name);
    setName('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        className="name-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your friend's name"
      />
    </form>
  );
};

export default AddFriendForm;
