import { createContext, useState } from 'react';
import { singleProjectData as initialProjectData } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
    const [singleProjectData, setSingleProjectData] = useState(initialProjectData);

    return (
        <SingleProjectContext.Provider value={{ singleProjectData, setSingleProjectData }}>
            {children}
        </SingleProjectContext.Provider>
    );
};

export default SingleProjectContext;
