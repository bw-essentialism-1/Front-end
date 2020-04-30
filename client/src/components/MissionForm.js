import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth'

//copy code, push, merge to master, then everyone can git pull

const MissionForm = ({ fetchMissions }) => {

const newMission = {mission: '', id: Date.now()}

const [mission, setMission] = useState(newMission)

const postMission = e => {
    e.preventDefault();
    axiosWithAuth()
    .put("https://bw-essentialism-1.herokuapp.com/api/mission", mission)
    .then(res => {
        console.log(res.data)
        setMission(newMission);
    })
    .catch(err => {
        console.log(err)
    })
  }

  const handleChanges = e => {
      setMission({[e.target.name]: [e.target.value]})
  }

  return (
    <div>
          <form onSubmit={postMission}>
               <input type="text"
                      name="mission"
                      value={mission.mission}
                      onChange={handleChanges}
                      placeholder="Add a mission..."
                      />
                <button>+</button>
          </form>
    </div>
  )

}

export default MissionForm
