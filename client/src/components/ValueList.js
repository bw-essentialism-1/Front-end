import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth"
import { useState, useEffect } from "react";
import ValueForm from "./ValueForm"


const ValueList = () => {

    const [essentialsList, setEssentialsList] = useState([]);
    const [topEssentials, setTopEssentials] = useState([]);
    
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

    const handleChanges = e => {

        if(e.target.name === 'essentials' ? e.target.checked : e.target.value){

            setTopEssentials({
            [e.target.name]: e.target.value
        });

        }
        
    }

    console.log(topEssentials)


    return(
        <div>
            <h1>Choose What Matters To You</h1>
            <form>
            {
             essentialsList.map(item => (
                <div>
                    <input type="checkbox" name='essentials' value={item.name} onChange={handleChanges}/>
                    <label>{item.name}</label><br/>
                </div>
            ))
            }
            <ValueForm/>
            <button>Next ></button>
            </form>
        </div>        
    )
}

export default ValueList
