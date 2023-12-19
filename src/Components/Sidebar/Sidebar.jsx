import React from "react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.scss"
import Yoga from "./yoga.svg"
import Swimming from "./swimming.svg"
import Cycling from "./cycling.svg"
import Dumbbell from "./dumbbell.svg"

export default function SideBar() {
    return (
         <section className={classes.sideBar}>
              <div className={classes.sportsLogo}>  
              <img src={Yoga} alt="yoga" />
              <img src={Swimming} alt="swimming" />
              <img src={Cycling} alt="cycling" />
              <img src={Dumbbell} alt="dumbbell" />
              </div>
              <div className={classes.copyright}>
                   <p>Copyryght, Sportsee2020</p>
              </div>
         </section>
    )
    }