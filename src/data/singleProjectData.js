// Import images
import Image1 from '../images/ui-project-1.jpg';
import bpmonitor from '../images/bpmonitor.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';

export const singleProjectData = {
    ProjectHeader: {
        title: 'Project Management UI',
        publishDate: 'Jul 26, 2021',
        tags: ['UI / Frontend', 'Web Development'],
    },
    ProjectImages: [
        {
            id: 1,
            title: 'Google Health Platform',
            img: Image1,
        },
        {
            id: 2,
            title: 'Google Health Platform',
            img: Image5,
        },
        {
            id: 3,
            title: 'Google Health Platform',
            img: Image6,
        },
        {
            id: 4,
            title: 'Blood Pressure Monitor App',
            img: bpmonitor,
        },
        {
            id: 5,
            title: 'Blood Pressure Monitor App',
            img: Image3,
        },
        {
            id: 6,
            title: 'React Social App',
            img: Image4,
        },
        {
            id: 7,
            title: 'React Social App',
            img: Image3,
        },
        {
            id: 8,
            title: 'Apple Design System',
            img: Image1,
        },
        {
            id: 9,
            title: 'Apple Design System',
            img: Image5,
        },
    ],
    ProjectInfo: {
        ObjectivesHeading: 'Objective',
        ObjectivesDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
        Technologies: [
            {
                title: 'Tools & Technologies',
                techs: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TailwindCSS']
            }
        ],
        ProjectDetailsHeading: 'Challenge',
        ProjectDetails: [
            {
                id: 1,
                details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
            },
        ],
    },
    RelatedProject: {
        title: 'Related Projects',
        Projects: [
            {
                id: 1,
                title: 'Mobile UI',
                img: Image4,
            },
            {
                id: 2,
                title: 'Web Application',
                img: Image5,
            },
            {
                id: 3,
                title: 'UI Design',
                img: Image6,
            },
            {
                id: 4,
                title: 'Kabul Mobile App UI',
                img: Image3,
            },
        ],
    },
};