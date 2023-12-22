import React from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/Sidebar/Sidebar";
import DashBoard from "../../Components/Dashboard/Dashboard";
import classes from "./Home.module.scss";
import { Link } from "react-router-dom"


export default function Home() {
 
    return(
        <>    
            <Header />
            <main className={classes.main_style}>
            <SideBar />
            <Link to="/user/12"><button>utilisateur id 12</button></Link>
            <Link to="/user/18"><button>utilisateur id 18</button></Link>
            </main>
        </>
    )
}