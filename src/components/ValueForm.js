import React, { useState } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

const ValueForm = ({ fetchEssentials }) => {
    // const newEssential = {name: '', id: Date.now()}

    const [essential, setEssential] = useState({name: ''});

    const handleChanges = e => {
        setEssential({[e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("https://bw-essentialism-1.herokuapp.com/api/essentials/", essential)
            .then(res => {
            fetchEssentials();
            // setEssential(newEssential)
            // console.log(res)
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
                        placeholder="Add values..."
                        value={essential.name}
                        onChange={handleChanges}
                        />

                <button type='submit'>+</button>
            </form>
        </div>
    )

}

export default ValueForm
