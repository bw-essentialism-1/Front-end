import React, { useState } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

const ValueForm = props => {
    const newEssential = {name: ''}

    const [essential, setEssential] = useState(newEssential);

    const handleChanges = e => {
        setEssential({...newEssential, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("https://bw-essentialism-1.herokuapp.com/api/essentials/", essential)
            .then(res => {
            console.log(res)
        })
            .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                        name="name"
                        placeholder="Add an essential..."
                        value={essential.name}
                        onChange={handleChanges}
                        />
                
                <button type='submit'>add</button>
            </form>
        </div>
    )

}

export default ValueForm