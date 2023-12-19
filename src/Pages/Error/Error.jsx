import React from "react";
import classes from "./Error.module.scss"
import { Link } from "react-router-dom"

export default function Error() {
    return (
        <div>
            <div>
				<h1>404</h1>
				<p>Oups ! La page que vous demandez n'existe pas.</p>
			</div>
				<Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}