const Study = ({study})=>{


    return (
        <li className="education-list-item">
        <div className="date-place">
            <h3>{study.date_range}</h3>
            <h4>{study.city}</h4>
        </div>
        <div className="sumary">
            <h3>{`${study.achivement} ${study.grade}`}</h3>
            <h4>{study.place}</h4>
        </div>
    </li>
    )
}

export default Study;