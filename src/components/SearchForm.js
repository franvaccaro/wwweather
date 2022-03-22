import React from 'react';
import './styles/SearchForm.css';
import location from '../assets/location.svg';
import searchIcon from '../assets/search.svg';
import logo from '../assets/logo.svg';

function SearchForm() {
  return (

    <div className='searchBar'>
      <img src={logo} alt='logo' className='logo'></img>
      <img src={location} title='Location' className='locationIcon' alt='location-icon'></img>
      <div className='locationText'>Buenos Aires, Argentina</div>
      <form>
        <div className='inputContainer'>
          <input type='text' className='inputField' placeholder="Search..."></input>
          <button type='submit' className='searchButton'>
            <img src={searchIcon} className='searchIcon' alt='search-icon'></img>
          </button>
        </div>
      </form>
    </div>

  );
}

export default SearchForm;
