import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Make Your Seminar More Attractive</h2>
            <h2>With <span className='span'>Arrange Seminar</span></h2>
            <small>By selecting  Sheikh you can contact with them  </small><br />
            <small>and they will attend in your Seminar</small>
            <h3>Total Budget : <span>$10000 k</span></h3>
            <hr className='f' />
        </div>
    );
};

export default Header;