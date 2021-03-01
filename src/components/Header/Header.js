import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className="header-div">
            <nav>
                <a href="/home">Home</a>
                <a href="/players">Players</a>
                <a href="/teams">Teams</a>
            </nav>
        </div>
    );
};

export default Header;