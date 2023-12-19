import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss"
import Logo from "../../logo.svg"

export default function Header() {
    return <header className={classes.headerStyle}>
        <nav className={classes.navStyle}>
            <Link to="/"><img src={Logo} alt="logo sportsee"/></Link>
            <ul className={classes.listStyle}>
                <li>
                    <Link to="/" className={classes.nav_options}>Accueil</Link>
                </li>
                <li>
                    <Link to="/" className={classes.nav_options}>Profil</Link>
                </li>
                <li>
                    <Link to="/" className={classes.nav_options}>Réglages</Link>
                </li>
                <li>
                    <Link to="/" className={classes.nav_options}>Communauté</Link>
                </li>
            </ul>
        </nav>
    </header>
}