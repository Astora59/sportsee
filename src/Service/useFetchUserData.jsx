import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"



const UseFetchUserData  = (id) => {
    const [mockUsage, setMockUsage] = useState(true);
    const [mainData, setMainData] = useState(null);
    const [activity, setActivity] = useState(null);
    const [performance, setPerformance] = useState(null);
    const [session, setSessions] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            let listUrls = [];  
            if (mockUsage) {
                listUrls.push(`http://localhost:3001/mock/${id}/userMainData.json`);
                listUrls.push(`http://localhost:3001/mock/${id}/userActivity.json`);
                listUrls.push(`http://localhost:3001/mock/${id}/userPerformance.json`);
                listUrls.push(`http://localhost:3001/mock/${id}/userAverageSessions.json`);
                console.log("mock")
            } else {
                listUrls.push(`http://localhost:3000/user/${id}`);
                listUrls.push(`http://localhost:3000/user/${id}/activity`);
                listUrls.push(`http://localhost:3000/user/${id}/performance`);
                listUrls.push(`http://localhost:3000/user/${id}/average-sessions`);
                console.log("API")
            }
            const requests = listUrls.map((url) => fetch(url));
            const responses = await Promise.all(requests);

            const mainDatas = await responses[0].json();
            setMainData(mainDatas.data);
            const activityDatas = await responses[1].json();
            setActivity(activityDatas.data);
            const performanceDatas = await responses[2].json();
            setPerformance(performanceDatas.data);
            const sessionDatas = await responses[3].json();
            setSessions(sessionDatas.data);
            

        }
        fetchData();
    }, [mockUsage])
    
    
    return {
        mockUsage,
        setMockUsage,
        mainData,
        activity,
        performance,
        session

    }
    
}

export default UseFetchUserData;