const Work = ({ work }) => {


    return (
        <>
            <div className="date-place">
                <h3>{work.date_range}</h3>
                <h4>{work.city}</h4>
            </div>
            <div className="work-info sumary">
                <h3>{work.place}</h3>
                <h4>{`As ${work.work}`}</h4>
                <p>Job Description:</p>
                <p>{work.description}</p>
            </div>
        </>
    )
}

export default Work;