import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth"
import { useState, useEffect } from "react";


const ValueList = () => {

    const [essentialsList, setEssentialsList] = useState([])
    
    const fetchEssentials = () => {
        axiosWithAuth().get("https://bw-essentialism-1.herokuapp.com/api/essentials/")
        .then(res => {
            console.log(res.data)
            setEssentialsList(res.data);
        })
        .catch(err => {
            console.log(err.response)
        })
    }
    
    useEffect(() => {
        fetchEssentials();
    }, []);

    return(
        <div>
            <h1>values</h1>
            {
             essentialsList.map(item => (
                <div key={item.name}>
                    <h2>{item.name}</h2>
                </div>
            ))
            }
        </div>        
    )
}

export default ValueList
