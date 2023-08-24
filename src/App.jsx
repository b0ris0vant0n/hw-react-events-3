import DropdownList from './DropdownList';
import './App.css';

import { useState } from 'react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Profile Information');

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const items = [
    'Profile Information',
    'Change Password',
    'Become Pro',
    'Help',
    'Log Out'
  ];

  return (
    <div className="container">
      <div className={`dropdown-wrapper ${isOpen ? 'open' : ''}`}>
        <button className="btn" onClick={toggleOpen}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        {isOpen && (
          <DropdownList
            items={items}
            selected={selectedItem}
            onItemClick={handleItemClick}
          />
        )}
      </div>
    </div>
  );
};

export default App;
