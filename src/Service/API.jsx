import React, { useState } from "react";
import { useEffect } from "react";
import classes from "./service.module.scss"

export const UserData = () => {
    const [projects, setProjects] = useState([])
    const [useMock, setUseMock] = useState(false)

    useEffect(() => {
        async function fetchData(id) {
            const response = await fetch(useMock ? "http://localhost:3001/userMainData.json" : `http://localhost:3000/user/${id}"`);
            const data = response.json();
            setProjects(data)
            
        }
        fetchData();
    }, [useMock])
    const handleSwitchSourceData = () => {
        setUseMock(!useMock)
    }

    return (
        <div className={classes.dataMockStyle}>
            <h1 className={classes.useMock}>Utilisation des données mockées :   {useMock ? "Oui" : "Non"}</h1>   
            <button onClick={handleSwitchSourceData} className={classes.mockButton}>Changer la source des données</button>
            {projects.map(user => (
        <h1 key={user.id}>Prénom: {user.userInfos.firstName}</h1>))}
        </div>
    )
}

    