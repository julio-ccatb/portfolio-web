import profile from '../resources/20161111_112325.png';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = () => {


    return (

        <div className="card">
            <div className="card-wraper">
                <div className="card-header">
                    <img src={profile} alt="Julio Castaño" className="profile-pic" />
                    <div className="card-header-body">
                        <h2 className="primary-text name">
                            Julio Castaño Almanzar
                    </h2>
                        <h3 className="secondary-text">
                            Web Developer
                    </h3>
                    </div>
                </div>
                <div className="card-body">

                    <ul className="social-list">
                        <li className="secondary-text"><a className="social-link" href="#"><FontAwesomeIcon className="icon" icon={faLinkedinIn} />Linkedin</a></li>
                        <li className="secondary-text"><a className="social-link" href="#"><FontAwesomeIcon className="icon" icon={faUser} />Personal Website</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;