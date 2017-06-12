import React from 'react'
import logo from './oction-logo-header.png';

const Header = () => {

    return (
        <div className="App-header">
            <img src={logo} alt="logo" />
            <h1 className="h1-header-items-in-auction">Items in Auction</h1>
        </div>
    )
}

export default Header