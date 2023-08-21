import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3 ps-5">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Contact List</span>
            </Link>
            <div className="ml-auto">
                <Link to="/contactForm">
                    <button className="btn btn-success me-5">Add new contact</button>
                </Link>
            </div>
        </nav>
    );
};