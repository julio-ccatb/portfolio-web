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
            <FontAwesomeIcon className="ball-icon" color="white" size="2x" icon={faPaperPlane} />
        </div>)
}

export default ContactBall;