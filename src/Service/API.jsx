// import React, { useState } from "react";
// import { useEffect } from "react";
// import classes from "./service.module.scss"

// export const UserData = () => {
//     const [projects, setProjects] = useState([])
//     const [useMock, setUseMock] = useState(false)

//     useEffect(() => {
//         async function fetchData(id) {
//             const response = await fetch(useMock ? "http://localhost:3001/userMainData.json" : `http://localhost:3000/user/${id}"`);
//             const data = response.json();
//             setProjects(data)
            
//         }
//         fetchData();
//     }, [useMock])
//     const handleSwitchSourceData = () => {
//         setUseMock(!useMock)
//     }

//     return (
//         <div className={classes.dataMockStyle}>
//             <h1 className={classes.useMock}>Utilisation des données mockées :   {useMock ? "Oui" : "Non"}</h1>   
//             <button onClick={handleSwitchSourceData} className={classes.mockButton}>Changer la source des données</button>
//         </div>
//     )
// }

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const DashBoard = () => {
    const {id} = useParams();
    const {mockUsage, setMockUsage} = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            let listUrls = [];
            if (mockUsage) {
                listUrls.push(`http://localhost:3001/mock/${id}/userMainData.json`)
                listUrls.push(`http://localhost:3001/mock/${id}/userActivity.json`)
                listUrls.push(`http://localhost:3001/mock/${id}/userAverageSessions.json`)
                listUrls.push(`http://localhost:3001/mock/${id}/userPerformance.json`)
            } else {
                 
            }
            const requests = listUrls.map((url) => fetch(url));
            const responses = await Promise.all(requests);
            console.log(responses)
        }
        fetchData();
    }, [mockUsage])
    return (
        <h1>Toto</h1>
    )
}