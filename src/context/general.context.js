import { createContext, useState } from "react";
import { faAngular, faNodeJs, faJs, faReact, faWordpressSimple, faJava } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';



export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {


    const initialState = [
        { status: 'intermediate', skill: 'Wordpress', icon: faWordpressSimple, id: 0, hovered: false },
        { status: 'Advanced', skill: 'NodeJs', icon: faNodeJs, id: 1, hovered: false },
        { status: 'intermediate', skill: 'React', icon: faReact, id: 2, hovered: false },
        { status: 'Advanced', skill: 'Javascript', icon: faJs, id: 3, hovered: false },
        { status: 'intermediate', skill: 'Java', icon: faJava, id: 4, hovered: false },
        { status: 'Advanced', skill: 'C#', icon: faCode, id: 5, hovered: false },
        { status: 'intermediate', skill: 'Angular', icon: faAngular, id: 6, hovered: false },
        { status: 'Advanced', skill: 'SQL/NoSQL', icon: faDatabase, id: 7, hovered: false }
    ]
    const [skills1, setskills] = useState(initialState);

    return (
        <GeneralContext.Provider
            value={{ skills1 }}>
            {children}
        </GeneralContext.Provider>

    )
}

export default GeneralContextProvider; 