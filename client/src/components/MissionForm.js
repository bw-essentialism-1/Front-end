import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth'

//copy code, push, merge to master, then everyone can git pull

const MissionForm = () => {

  const [mission, setMission] = useState({
      mission: ''
});


  const fetchMission = () => {
      axiosWithAuth()
      .get("https://bw-essentialism-1.herokuapp.com/api/mission/")
      .then(res => {
          console.log(res.data, "hello")
          setMission(res.data);
      })
      .catch(err => {
          console.log(err.response)
      })
  }

  useEffect(() => {
    fetchMission()
  }, [])


  const postMission = () => {
    axiosWithAuth()
    .post("https://bw-essentialism-1.herokuapp.com/api/mission/", mission)
    .then(res => {
        console.log(res.data)
        setMission(res.data);
    })
    .catch(err => {
        console.log(err.response)
    })
  }

  const handleChanges = e => {
      setMission({[e.target.name]: [e.target.value]})
  }

  return (
    <div>
          <textarea name="mission" form="missionform">Enter Your Mission Statement</textarea>
          <form onSubmit={postMission} id="missionform">
               <input type="submit"
                      name="mission"
                      value={mission.mission}
                      onChange={handleChanges}
                      />
          </form>
    </div>
  )

}

export default MissionForm
