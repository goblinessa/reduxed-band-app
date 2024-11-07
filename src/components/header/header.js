import React from "react";
import './header.css';
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <header className="header">
            <div className="content">
                <h1 className="logo">Music Bands Of Uzhgorod</h1>
                <nav>
                    <ul className="nav-links">
                        <li><Link to={"/add-band/"}>Add Band</Link></li>
                        <li><Link to={"/band-table/"}>Band Table</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;