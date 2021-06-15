import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"

const ContactBall = () => {


    const [isOpen, setisOpen] = useState(false);

    const Toggle = () => {
        setisOpen(!isOpen);
        console.log('isOpen', isOpen)
    }


    return (
        <div onClick={Toggle} className="contactball">
            {isOpen ? <FontAwesomeIcon className="ball-icon" color="white" size="2x" icon={faPaperPlane} />
                : <FontAwesomeIcon className="ball-icon" rotate={180} color="white" size="2x" icon={faPaperPlane} />}
        </div>)
}

export default ContactBall;