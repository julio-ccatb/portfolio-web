import { useContext, useEffect, useState } from "react"
import { GeneralContext } from "../context/general.context"
import NotAvilable from "../resources/Image-Not-Available.png"
import SkillItem from "./subComponents/skilli_item"
import axios from "axios";



const Projects = () => {


    const { skills1 } = useContext(GeneralContext);


    const [index, setindex] = useState([1, 7, 3]);
    const [projects, setProjects] = useState([]);
    const [projecSelected, setProjectSelected] = useState();

    useEffect(async () => {

        try {
            let { data } = await axios.get("https://node-app-pf.herokuapp.com/api/projects");
            setProjects(data);
        }
        catch (err) {
            console.error(err)
        }
    }, [])

    return (
        <div className="projects">
            <div className="projects-wraper">
                <h2 className="primary-text header">Projects</h2>
                {
                    projecSelected ? (<div key={projecSelected._id} className="selected-project">
                        <div key={projecSelected._id} className="project-header">
                            <img className="project-img" alt={projecSelected.name}
                                src={`${projecSelected.img ? projecSelected.img : NotAvilable}`} />
                        </div>
                        <div className="project-info">
                            <h3 className="project-name primary-text header">{projecSelected.name}</h3>
                            <p className="project-description">{projecSelected.description}</p>
                            <div className="tecnologies">
                                {
                                    index.map(id => {
                                        return (
                                            <SkillItem
                                                iconSize="2x"
                                                customClass={'badge'}
                                                link="#"
                                                skill={skills1.find(element => element.id === id)}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className="btns">
                                <a className="btn-acces goto-0" href="#">Go To</a>
                                <a className="btn-acces goto-1" href={projecSelected.url} >Repo</a>
                            </div>
                        </div>
                    </div>) : <></>
                }
                <div className="project-dash">
                    {
                        projects.map((project) => {

                            return (
                                <div
                                    onClick={() => {
                                        setProjectSelected(project);
                                    }}
                                    key={project._id}
                                    className="project-mini">
                                    <img className="project-header project-img img-mini" src={`${project.img ? project.img : NotAvilable}`} ></img>
                                    <h3 className="project-mini-name">{project.name}</h3>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default Projects;