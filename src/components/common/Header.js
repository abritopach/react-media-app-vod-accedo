import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (

    <nav className="navbar navbar-default">
        <a href="https://www.accedo.tv/" target="_blank" rel="noopener noreferrer">
            <img className="navbar-brand" src="https://www.accedo.tv/wp-content/uploads/2013/09/AccedoLogo_RGB.png"
                 alt="Accedo Logo"/>
        </a>
        <div className="text-center">
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/history">History</Link>
        </div>
    </nav>

);

export default Header;
