import { useContext, useState } from "react"
import { GeneralContext } from "../context/general.context"
import SkillItem from "./subComponents/skilli_item"



const Projects = () => {


    const { skills1 } = useContext(GeneralContext)
    let initialState = skills1

    const [index, setindex] = useState([1, 2, 3, 5])

    return (
        <div className="projects">
            <div className="projects-wraper">
                <h2 className="primary-text header">Projects</h2>
                <div className="selected-project">
                    <div className="project-header">
                        <img className="project-img" alt=""
                            src="https://media.jscrambler.com/meta-tag-images/facebook-link-webpage-integrity.png" />
                    </div>
                    <div className="project-info">
                        <h3 className="project-name primary-text header">project name</h3>
                        <p className="project-description">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen </p>
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
                            <a className="btn-acces goto-1" href="#">Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;