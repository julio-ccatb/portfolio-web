import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp, faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons"
import Study from "./study";
import Work from "./work";
import { useState } from "react";

const ResumeSection = () => {

    const [index, setindex] = useState(0);

    const changeIndex = (move) => {

        if (move === 1 && index < works.length - 1) {
            setindex(index + 1);
        } else if (move === 0 && index > 0) {
            setindex(index - 1);
        }

        console.log(index)
    }

    const education = [
        { date_range: '2017-TODAY', city: 'Santo Domingo', achivement: 'Studiying:', grade: 'Computer Sciences', place: 'APEC University' },
        { date_range: '2016-2017', city: 'Santo Domingo', achivement: 'Title:', grade: 'Intermediate English', place: 'Dominican American Language School' },
        { date_range: '2012-2016', city: 'Santo Domingo', achivement: 'Title:', grade: 'Bachelor', place: 'Colegio Dominicano de La Salle' },
    ]

    const works = [
        { date_range: '2019-TODAY', city: 'Santo Domingo', place: 'Ozono Quimicos', work: 'Software Developer', description: 'Developing a production control system for the manufacturing area.' },
        { date_range: '2019-2020', city: 'Santo Domingo', place: 'Soluflex', work: 'Database Support', description: 'Mainly play the role of contact of the company at the Ney Arias Lora Hospital, in addition to supporting bases data and act as technical support of the application GeMedi.' },
        { date_range: '2016-2018', city: 'Santo Domingo', place: 'Amerident Group', work: 'Cashier', description: 'Mainly, I worked as a front-line cashier, being the one in charge of opening the shifts in addition to training the new cashiers assigned to that area, adding to this various temporary rotations to the administrative areas.' }
    ]

    return (<div className="resume">
        <div className="resume-wraper">
            <h2 className="primary-text ">Resume</h2>
            <div className="education">
                <h2 className="primary-text section-header">Education</h2>
                <ul className="education-list">
                    {education.map(item => {
                        return <Study study={item} />
                    })}
                </ul>
            </div>
            <div className="work">
                <h2 className="primary-text section-header">Work Experience</h2>
                <ul className="work-list">
                    <li className="work-list-item">
                        <Work work={works[index]} />
                        <div className="buttons">
                            <FontAwesomeIcon
                                style={index === 0 ? { display: "none" } : {}}
                                onClick={() => changeIndex(0)}
                                className="btn btn-up"
                                size="3x"
                                icon={faArrowAltCircleUp} />
                            <FontAwesomeIcon
                                style={index === works.length - 1 ? { display: "none" } : {}}
                                onClick={() => changeIndex(1)}
                                className="btn btn-down"
                                size="3x"
                                icon={faArrowAltCircleDown} />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>)
}

export default ResumeSection;