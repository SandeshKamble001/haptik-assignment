import React from 'react';

import TitleBar from './title-bar/TitleBar';
import AddFriendForm from './add-friend-form/AddFriendForm';
import List from './list/List';

import './App.scss';

const friends = [
  {
    name: 'Rahul Gupta',
    isFavorite: false,
  },
  {
    name: 'Shivangi Sharma',
    isFavorite: true,
  },
  {
    name: 'Akash Singh',
    isFavorite: true,
  },
];

const App = () => {
  return (
    <div className="app-container">
      <TitleBar />
      <AddFriendForm />
      <List friends={friends} />
    </div>
  );
};

export default App;
