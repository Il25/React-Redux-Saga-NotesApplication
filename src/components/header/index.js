import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
    return(
        <div className="navigation">
            <Link className="home_navigation" to="/home">
                <i>Home</i>
            </Link>
            <Link className="notes_navigation" to="/notes">
                <i>Notes</i>
            </Link>
        </div>
    );
};

export default Header;