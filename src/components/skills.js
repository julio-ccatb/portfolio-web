import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faNodeJs, faJs, faReact, faWordpressSimple, faJava } from '@fortawesome/free-brands-svg-icons'
import { faDatabase,faCode } from '@fortawesome/free-solid-svg-icons'
const SkillsCard = () => {

    const  styleFix = { color: "white", width: " 1.8rem" }


    return (
        <div className="skills">
            <div className="skill-wraper">
                <h2 className="primary-text header">skills</h2>
                <ul className="skill-list">
                    <li className="skills-list-item" ><FontAwesomeIcon style={styleFix} className="icon" size="2x" icon={faDatabase} />Advanced </li>
                    <li className="skills-list-item" ><FontAwesomeIcon style={styleFix} className="icon" size="2x" icon={faNodeJs} />Advanced </li>
                    <li className="skills-list-item" ><FontAwesomeIcon style={styleFix} className="icon" size="2x" icon={faJs} />Advanced </li>
                    <li className="skills-list-item" ><FontAwesomeIcon style={styleFix} className="icon" size="2x" icon={faCode} />Advanced </li>
                    <li className="skills-list-item" ><FontAwesomeIcon style={styleFix} className="icon" size="2x" icon={faJava} />intermediate </li>
                    <li className="skills-list-item" ><FontAwesomeIcon style={styleFix} className="icon" size="2x" icon={faReact} />intermediate </li>
                    <li className="skills-list-item" ><FontAwesomeIcon style={styleFix} className="icon" size="2x" icon={faWordpressSimple} />intermediate </li>
                    <li className="skills-list-item" ><FontAwesomeIcon style={styleFix} className="icon" size="2x" icon={faAngular} />intermediate </li>
                </ul>
            </div>
            <div className="language-wraper">
                <h2 className="primary-text header">Languages</h2>

            </div>
        </div>
    )
}

export default SkillsCard;