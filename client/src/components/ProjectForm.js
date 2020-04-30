import React, { useState } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

const ProjectForm = ({ fetchProjects }) => {
   
    const newProject = {name: '', id: Date.now()}

    const [project, setProject] = useState(newProject)

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("https://bw-essentialism-1.herokuapp.com/api/projects", project)
            .then(res => {
            fetchProjects();
            setProject(newProject)
        })
            .catch(err => {
            console.log(err)
        })
    }

    const handleChanges = e => {
        setProject({[e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                        name="name"
                        placeholder="Add projects..."
                        value={project.name}
                        onChange={handleChanges}
                        />

                <button type='submit'>+</button>
            </form>
        </div>
    )


}

export default ProjectForm