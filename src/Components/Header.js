import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to='/'>AXA</Link>
                    <a className="navbar-brand"></a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><NavLink activeClassName='active' to='/about'>About</NavLink></li>
                        <li><NavLink activeClassName='active' to='/contact'>Contact</NavLink></li>
                        <li><NavLink activeClassName='active' to='/topics'>Topics</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;


