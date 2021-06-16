import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faFilePdf } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"

const ContactBall = () => {


    return (
        <a
            href="https://node-app-pf.herokuapp.com/api/cvitae"
            target="_blank">

            <div className="contactball">
                <FontAwesomeIcon

                    className="ball-icon"
                    color="white"
                    size="2x"
                    icon={faFilePdf} />
            </div>
        </a>
    )
}

export default ContactBall;