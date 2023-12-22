import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "../../Components/Header/Header"
import Sidebar from "../../Components/Sidebar/Sidebar"
import UseFetchUserData from "../../Service/useFetchUserData"


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
        <>
            <button onClick={() => setMockUsage(!mockUsage)}>Utilisation des données {mockUsage ? "API" : "mock"}</button>
            <h1>Bonjour</h1>
        </>
        
    )
    
}

export default Dashboard