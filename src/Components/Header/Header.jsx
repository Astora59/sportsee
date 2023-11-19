import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.svg"

export default function Header() {
    return <header>
        <nav>
            <Link to="/"><img src={Logo} alt="logo sportsee"/></Link>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/">Profil</Link>
                </li>
                <li>
                    <Link to="/">Réglages</Link>
                </li>
                <li>
                    <Link to="/">Communauté</Link>
                </li>
            </ul>
        </nav>
    </header>
}