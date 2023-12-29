import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "../../Components/Header/Header"
import Sidebar from "../../Components/Sidebar/Sidebar"
import UseFetchUserData from "../../Service/useFetchUserData"
import DailyActivityChart from "../Charts/dailyActivityChart/DailyActivityChart"
import classes from "./Dashboard.module.scss"


const Dashboard = () => {
    const {id} = useParams();
    const {
        mockUsage,
        setMockUsage,
        mainData,
        activity,
        performance,
        sessions,
    } = UseFetchUserData(id)
    
    
    return (
        <div className={classes.chart_style}>
            <button onClick={() => setMockUsage(!mockUsage)}>Utilisation des données {mockUsage ? "API" : "mock"}</button>
            <h1>Bonjour</h1>
            <div className={classes.chart_style}>
                <DailyActivityChart />
            </div>
            

        </div>
        
    )
    
}

export default Dashboard