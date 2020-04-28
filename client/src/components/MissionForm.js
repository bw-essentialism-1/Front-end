import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const MissionForm = () => {

  const [mission, setMission] = useState('');


  const fetchMission = () => {
      axiosWithAuth()
      .get("https://bw-essentialism-1.herokuapp.com/api/mission/")
      .then(res => {
          console.log(res.data)
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
    .post("https://bw-essentialism-1.herokuapp.com/api/mission/")
    .then(res => {
        console.log(res.data)
        setMission(res.data);
    })
    .catch(err => {
        console.log(err.response)
    })
  }

  return (
      <div>
          <form onSubmit={postMission}>
              <input type="text"
                      name="name"
                      placeholder="Enter Your Mission Statement."
                      value={}
                      onChange={handleChanges}
                      />

              <button type='submit'>+</button>
          </form>
      </div>
  )

}

export default MissionForm
