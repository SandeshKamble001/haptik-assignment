import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import TitleBar from './title-bar/TitleBar';
import AddFriendForm from './add-friend-form/AddFriendForm';
import List from './list/List';
import SearchBar from './search-bar/SearchBar';
import SortOptions from './sort-options/SortOptions';
import Paginator from './paginator/Paginator';

import { addFriend } from '../state/actions';
import searchFriends from '../utils/searchFriends';
import sortFriends from '../utils/sortFriends';

import './App.scss';
import optionsIcon from '../assets/icons/options.svg';
import closeIcon from '../assets/icons/cross.svg';

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

const App = ({ friends, addFriend }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredSortedFriends, setFilteredSortedFriends] = useState([]);
  const [friendsToShow, setFriendsToShow] = useState([]);

  useEffect(() => {
    setFilteredSortedFriends(
      sortFriends(sortField, searchFriends(searchTerm, friends))
    );
  }, [friends, sortField, searchTerm]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * 4;
    const endIndex = startIndex + 4;
    setFriendsToShow(filteredSortedFriends.slice(startIndex, endIndex));
  }, [currentPage, filteredSortedFriends]);

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
      {isMenuOpen ? <SearchBar onSearch={setSearchTerm} /> : null}
      {isMenuOpen ? (
        <SortOptions
          onChange={setSortField}
          sortField="name"
          options={sortOptions}
        />
      ) : null}
      <AddFriendForm onSubmit={addFriend} />
      <List friends={friendsToShow} />
      {filteredSortedFriends.length > 4 ? (
        <Paginator
          totalItems={filteredSortedFriends.length}
          pageSize={4}
          onPageChange={setCurrentPage}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  friends: state.friends,
});

export default connect(mapStateToProps, { addFriend })(App);
