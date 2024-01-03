 import React from "react"
// import { useParams } from "react-router-dom"
// import { useState, useEffect } from "react"
 import Header from "../../Components/Header/Header"
 import Sidebar from "../../Components/Sidebar/Sidebar"
 import Dashboard from "../../Components/Dashboard/Dashboard"
 import classes from "./Userpage.module.scss"


export default function Userpage() {
    return (
        <>
            <Header />
            <div className={classes.pageLayout}>
                <Sidebar />
                <Dashboard />
            </div>
        </>
        
    )
}
//https://bobbyhadz.com/blog/react-element-type-is-invalid-expected-string-but-got va vérifier ça