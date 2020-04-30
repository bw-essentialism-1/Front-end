import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth"
import { useState, useEffect } from "react";
import ValueForm from "./ValueForm"


const ValueList = () => {

    const [essentialsList, setEssentialsList] = useState([]);

    const fetchEssentials = () => {
        axiosWithAuth()
            .get("https://bw-essentialism-1.herokuapp.com/api/essentials/")
            .then(res => {
                console.log(res.data)
                setEssentialsList(res.data);
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    const deleteEss = deletedEssential => {
        const newEssentials = [...essentialsList];
        const deletedEssentials = newEssentials.filter(item => item.id !== deletedEssential)
        setEssentialsList(deletedEssentials);
        console.log(deletedEssentials)
      }

    const deleteEssentials = essential => {
        axiosWithAuth()
            .delete(`https://bw-essentialism-1.herokuapp.com/api/essentials/${essential.id}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response)
            })
    }


    useEffect(() => {
        fetchEssentials();
    }, []);


    console.log(essentialsList)


    return(
        <div className="vals">
            <h1>Essentials</h1>
            <form>
            {
             essentialsList.map(item => (
                <div className="vList">
                    <label className="vLabel">{item.name}</label>
                    <button className="vButton" onClick={(e) => {
                    e.stopPropagation();
                    deleteEssentials(item)
                    deleteEss(item.id)
                  }}>x</button>
              </div>
            ))
            }
            <ValueForm fetchEssentials={fetchEssentials}/>
            </form>
        </div>
    )
}

export default ValueList
