import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth"
import { useState, useEffect } from "react";
// import MissionForm from "./MissionForm"

const MissionList = () => {

    const [missions, setMissions] = useState([]);
    const [editing, setEditing] = useState(false)
    const [missionToEdit, setMissionToEdit] = useState({mission: ''})

    const fetchMissions = () => {
        axiosWithAuth().get("https://bw-essentialism-1.herokuapp.com/api/mission")
            .then(res => {
                console.log(res.data, "missionz")
                setMissions(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const editMission = (mission) => {
        setEditing(true)
        setMissionToEdit(mission)
    }

    const saveEdit = async mission => {
        await axiosWithAuth()
            .put("https://bw-essentialism-1.herokuapp.com/api/auth/mission", mission)
            .then(res => {
                setEditing(false)
                axiosWithAuth()
                fetchMissions()
            })
            .catch(err => {
                console.log(err.response)
            })
    }
    

    useEffect(() => {
        fetchMissions();
    }, []);

    return(
        <div className="missions">
        <h1>Mission</h1>
        <form>
               { 
                missions.map(item => (
            <div className="mList">
                <label className="mLabel">{item.mission}</label>
                <button className="mButton" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    //deleteProj(item.id)
                  }}>e</button>  
            </div>  
                ))
                } 
                <ul>
                {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit mission</legend>
          <label>
            mission:
            <input
              onChange={e =>
                setMissionToEdit({ ...missionToEdit, mission: e.target.value })
              }
              value={missionToEdit.mission}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
                </ul>
        </form>
        </div>
    )
}

export default MissionList