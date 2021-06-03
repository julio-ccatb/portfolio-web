
import React, { useState, useContext } from 'react'
import SkillItem from './skilli_item';
import { GeneralContext } from "../context/general.context";

const SkillsCard = () => {

    const { skills1 } = useContext(GeneralContext)
    let initialState = skills1

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
                        skills ? skills.map((skill) => {

                            return (
                                <SkillItem
                                    iconSize="2x"
                                    customClass={`skills-list-item ${skill.hovered ? 'status' : ''}`}
                                    styleFix={styleFix}
                                    statusToggler={statusToggler}
                                    skill={skill} />
                            )
                        }) : ''
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

