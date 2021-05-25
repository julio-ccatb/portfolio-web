
const ResumeSection = () => {

    const education = [
        { date_range: '2012-2016', city: 'Santo Domingo', achivement: 'Title:', grade: 'Bachelor', place: 'Colegio Dominicano de La Salle' },
        { date_range: '2016-2017', city: 'Santo Domingo', achivement: 'Title:', grade: 'Intermediate English', place: 'Dominican American Language School' },
        { date_range: '2017-TODAY', city: 'Santo Domingo', achivement: 'Studiying:', grade: 'Computer Sciences', place: 'APEC University' },
    ]


    return (<div className="resume">
        <div className="resume-wraper">
            <h2 className="primary-text ">Resume</h2>
            <div className="education">
                <h2 className="primary-text section-header">Education</h2>
                <ul className="education-list">
                    <li className="education-list-item"></li>
                </ul>
            </div>
        </div>
    </div>)
}

export default ResumeSection;