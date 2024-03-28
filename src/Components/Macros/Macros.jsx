import React from "react";
import classes from "./Macros.module.scss"

export default function Macros(props) {
    return (
        <div className={classes.mainStyle}>
            <img src={props.iconSrc} alt={props.altIcon}  style={{ color: props.color}}></img>
            <div className={classes.macroStyle}>
                <p className={classes.macroNumber}>{props.macroNumber}g</p>
                <p className={classes.macroInfo}>{props.macroInfo}</p>
            </div>
            
        </div>
    )
}