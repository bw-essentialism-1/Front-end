import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth"
import { useState, useEffect } from "react";
import ProjectForm from "./ProjectForm"

const ProjectList = () => {

    const [projects, setProjects] = useState([]);

    const fetchProjects = () => {
        axiosWithAuth().get("https://bw-essentialism-1.herokuapp.com/api/projects")
            .then(res => {
                setProjects(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteProj = deletedProj => {
        const newProjs = [...projects];
        const deletedProjects = newProjs.filter(item => item.id !== deletedProj)
        setProjects(deletedProjects);
        console.log(deletedProjects);
      }

    const deleteProjects = async project => {
        await axiosWithAuth() 
            .delete(`https://bw-essentialism-1.herokuapp.com/api/projects/${project.id}`)
            .then(res => {
                window.location.reload();
                console.log(res)
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        fetchProjects();
    }, []);

    return(
        <div className="projs">
            <h1>Projects</h1>
            <form>
            {
             projects.map(item => (
                <div className="pList">
                    <label className="pLabel">{item.name}</label>
                    <button className="pButton" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    deleteProjects(item);
                    deleteProj(item.id)
                  }}>x</button>
              </div>
            ))
            }
            </form>
            <ProjectForm fetchProjects={fetchProjects}/>
        </div>
    )

}

export default ProjectList