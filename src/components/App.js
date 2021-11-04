import React, { useState } from 'react';

import TitleBar from './title-bar/TitleBar';
import AddFriendForm from './add-friend-form/AddFriendForm';
import List from './list/List';
import SearchBar from './search-bar/SearchBar';
import SortOptions from './sort-options/SortOptions';

import './App.scss';
import optionsIcon from '../assets/icons/options.svg';
import closeIcon from '../assets/icons/cross.svg';

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

const sortOptions = [
  {
    label: 'Name',
    value: 'name',
  },
  {
    label: 'Favorite',
    value: 'isFavorite',
  },
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderOpenMenuButton = () => {
    return (
      <button className="btn-menu" onClick={() => setIsMenuOpen(true)}>
        <img src={optionsIcon} className="btn-icon" alt="favorite" />
      </button>
    );
  };

  const renderCloseMenuButton = () => {
    return (
      <button className="btn-menu" onClick={() => setIsMenuOpen(false)}>
        <img src={closeIcon} className="btn-icon" alt="favorite" />
      </button>
    );
  };

  return (
    <div className="app-container">
      <TitleBar>
        {isMenuOpen ? renderCloseMenuButton() : renderOpenMenuButton()}
      </TitleBar>
      {isMenuOpen ? <SearchBar /> : null}
      {isMenuOpen ? <SortOptions options={sortOptions} /> : null}
      <AddFriendForm />
      <List friends={friends} />
    </div>
  );
};

export default App;
