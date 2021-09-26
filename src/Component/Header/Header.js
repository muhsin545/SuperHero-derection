import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header bg-info'>
            <h2>Make Your Seminar More Attractive With <span className='span'>Arrange Seminar</span></h2>

            <div className='d-flex justify-content-between mt-5'>
                <h3>Total Budget : <span>$10000 k</span></h3>
                <nav class="navbar navbar-light">
                    <div className="container-fluid">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search Sheikh" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            <hr />
        </div>
    );
};

export default Header;