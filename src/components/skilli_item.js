import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SkillItem = ({ skill, statusToggler, styleFix, link, customClass, iconSize }) => {

    if (!statusToggler) statusToggler = () => { }


    return (
        <a

            href={link}
            onMouseLeave={statusToggler}
            onMouseEnter={statusToggler}
            status={skill.status}
            className={`${customClass}`}
            id={skill.id}
            key={skill.id} >
            <FontAwesomeIcon
                style={styleFix}
                className="icon"
                size={iconSize}
                icon={skill.icon} />
            {skill.skill}
        </a>
    )
}

export default SkillItem;