import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { toolsHeading as toolsPageHeading } from '../data/toolsData';
import { toolsData as toolsDataJson } from '../data/toolsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
    const [aboutMe, setAboutMe] = useState(aboutMeData);
    const toolsHeading = toolsPageHeading;
    const [toolsData, setToolsData] = useState(toolsDataJson);

    return (
        <AboutMeContext.Provider
            value={{
                aboutMe,
                setAboutMe,
                toolsHeading,
                toolsData,
                setToolsData,
            }}
        >
            {children}
        </AboutMeContext.Provider>
    );
};

export default AboutMeContext;
