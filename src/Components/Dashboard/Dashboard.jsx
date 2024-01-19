import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "../../Components/Header/Header"
import Sidebar from "../../Components/Sidebar/Sidebar"
import  UseFetchUserData from "../../Service/useFetchUserData"
import { DailyActivityChart } from "../Charts/dailyActivityChart/DailyActivityChart"
import { PerformanceChart } from "../Charts/PerformanceChart/PerformanceChart"
import { SessionsChart } from "../Charts/SessionsChart/SessionsChart"
import { ScoreChart } from "../Charts/ScoreChart/ScoreChart"
import Macros from "../Macros/Macros"
import fireCalories from "./fireCalories.svg"
import proteines from "./proteines.svg"
import glucides from "./glucides.svg"
import lipides from "./lipides.svg"
import classes from "./Dashboard.module.scss"


const Dashboard = () => {
    const {id} = useParams();
    const {
        mockUsage,
        setMockUsage,
        mainData,
        setMainData,
        activity,
        performance,
        session,
    } = UseFetchUserData(id)
    
    return (
        <div className={classes.chart_style}>
             <button onClick={() => setMockUsage(!mockUsage)}>Utilisation des données {mockUsage ? "API" : "mock"}</button>
            <div className={classes.homeMessage}>
                <h1>Bonjour</h1>
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
           
            
            <div className={classes.generalLayout}>
                <div className={classes.dashboard_style}>
                    <DailyActivityChart activity={activity}/>
                    <div className={classes.chartLayout}>
                        <SessionsChart session={session} />
                        <PerformanceChart performance={performance} />
                        <ScoreChart />
                        
                    </div>
                </div>
                <div className={classes.macroLayout}>
                    <Macros iconSrc={fireCalories} altIcon="burned calories icon" macroNumber={mainData?.keyData.calorieCount} macroInfo="calories">
                        <p>Kcal</p>
                    </Macros>
                    <Macros iconSrc={proteines} altIcon="proteines icon" macroNumber={mainData?.keyData.proteinCount} macroInfo="protéines" className={classes.caloriesStyle} />
                    <Macros iconSrc={glucides} altIcon="glucides icon" macroNumber={mainData?.keyData.carbohydrateCount} macroInfo="glucides" />
                    <Macros iconSrc={lipides} altIcon="lipides icon" macroNumber={mainData?.keyData.lipidCount} macroInfo="lipides" />
                </div>
            
            </div>
                
            
            

        </div>
        
    )
    
}

export default Dashboard