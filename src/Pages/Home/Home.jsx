import React from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/Sidebar/Sidebar";
import DashBoard from "../../Components/Dashboard/Dashboard";
import classes from "./Home.module.scss";
import { UserData } from "../../Service/API"

export default function Home(data) {
 
    return(
        <>    
            <Header />
            <main className={classes.main_style}>
            <SideBar />
            <div className={classes.dashboardStyle}>
            <UserData />    
            <DashBoard />
            </div>
            </main>
        </>
    )
}