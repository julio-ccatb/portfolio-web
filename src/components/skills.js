import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faNodeJs, faJs, faReact, faWordpressSimple, faJava } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'

const SkillsCard = () => {

    const initialState = [
        { status: 'intermediate', skill: 'Wordpress', icon: faWordpressSimple, id: 0, hovered: false },
        { status: 'Advanced', skill: 'NodeJs', icon: faNodeJs, id: 1, hovered: false },
        { status: 'intermediate', skill: 'React', icon: faReact, id: 2, hovered: false },
        { status: 'Advanced', skill: 'Javascript', icon: faJs, id: 3, hovered: false },
        { status: 'intermediate', skill: 'Java', icon: faJava, id: 4, hovered: false },
        { status: 'Advanced', skill: 'C#', icon: faCode, id: 5, hovered: false },
        { status: 'intermediate', skill: 'Angular', icon: faAngular, id: 6, hovered: false },
        { status: 'Advanced', skill: 'SQL/NoSQL', icon: faDatabase, id: 7, hovered: false }
    ]
    const [skills, setskill] = useState(initialState)
    const styleFix = {
        color: "white",
        width: " 1.8rem"
    }

    const statusToggler = (skill) => {
        // skill.hovered = !skill.hovered;
        let id = skill.target.id;
        if (skills[id] !== undefined) {
            initialState[id].hovered = !skills[id].hovered;
            setskill([...initialState])
        } else {
            setskill([...initialState])

        }


    }

    return (
        <div className="skills">
            <div className="skill-wraper">
                <h2 className="primary-text header">skills</h2>
                <ul className="skill-list">
                    {
                        skills.map((skill) => {

                            return (
                                <li
                                    onMouseLeave={statusToggler}
                                    onMouseEnter={statusToggler}
                                    status={skill.status}
                                    className={`skills-list-item ${skill.hovered ? 'status' : ''}`}
                                    id={skill.id}
                                    key={skill.id} >
                                    <FontAwesomeIcon
                                        style={styleFix}
                                        className="icon"
                                        size="2x"
                                        icon={skill.icon} />
                                    {skill.skill}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="language-wraper">
                <h2 className="primary-text header">Languages</h2>
                <div className="language-list">
                    <h2 score={10} className="language-list-item primary-text" >Spanish</h2>
                    <h2 score={8} className="language-list-item primary-text" >English</h2>
                </div>

            </div>
        </div>
    )
}

export default SkillsCard;

