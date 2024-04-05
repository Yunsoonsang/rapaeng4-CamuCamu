import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bd-navbar navbar-light bg-success fixed-top">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">Team Camucamu</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-bar-chart-steps"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
