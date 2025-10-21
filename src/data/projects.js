import { v4 as uuidv4 } from 'uuid';
import travelguide from '../images/travelguide.jpg';
import travel1 from '../images/travel1.png';
import travel2 from '../images/travel2.png';
import travel3 from '../images/travel3.png';
import bpmain from '../images/bpmain.png';
import bplogin from '../images/bplogin.png';
import bpfeature from '../images/bpfeature.png';
import voxaid from '../images/voxaid.png';
import bpmonitor from '../images/bpmonitor.jpg';
import voxaidhome from '../images/voxaidhome.png';
import voxaid1 from '../images/voxaid1.png';
import voxaid2 from '../images/voxaid2.png';	
import drivemnl from '../images/drivemnl.png';
import drivemnl1 from '../images/drivemnl1.png';
import drivemnl2 from '../images/drivemnl2.png';

export const projectsData = [
{
    id: uuidv4(),
    title: 'Travel Guide App',
    category: 'Mobile Application',
    img: [travelguide], // Replace with the actual image import
    ProjectHeader: {
        title: 'Travel Guide App',
        publishDate: 'March 16, 2025', // Adjust date if needed
        tags: ['Mobile Application'],
    },
    ProjectImages: [
        { id: 1, title: 'Paris, France', img: [travel1] },
        { id: 2, title: 'New York, USA', img: [travel2] },
        { id: 3, title: 'Tokyo, Japan', img: [travel3] },
    ],
    description: 'An interactive mobile app featuring travel guides for popular destinations like Paris, New York, and Tokyo, with detailed itineraries and tips.', // Your custom description
},
{
    id: uuidv4(),
    title: 'Blood Pressure Monitor App',
    category: 'Mobile Application',
    img: [bpmonitor], // Replace with the actual image import
    ProjectHeader: {
        title: 'Travel Guide App',
        publishDate: 'April 3, 2025', // Adjust date if needed
        tags: ['Mobile Application'],
    },
    ProjectImages: [
        { id: 1, title: 'BP Main', img: [bpmain] },
        { id: 2, title: 'BP Login', img: [bplogin] },
        { id: 3, title: 'BP Feature', img: [bpfeature] },
    ],
    description: 'An interactive medical mobile app that records blood pressure and shareable for saving or check-up purposes.', // Your custom description
},
{
    id: uuidv4(),
    title: 'VoxAid',
    category: 'Mobile Application',
    img: [voxaid], // Replace with the actual image import
    ProjectHeader: {
        title: 'VoxAid',
        publishDate: 'Ongoing', // Adjust date if needed
        tags: ['Mobile Application'],
    },
    ProjectImages: [
        { id: 1, title: 'VoxAid Home', img: [voxaidhome] },
        { id: 2, title: 'VoxAid 1', img: [voxaid1] },
        { id: 3, title: 'VoxAid 2', img: [voxaid2] },
    ],
    description: 'An interactive medical mobile app that teaches you to do first aid and has accessible voice commands that you can use to navigate while performing the procedures.', // Your custom description
},
{
    id: uuidv4(),
    title: 'DriveMNL',
    category: 'Web Application',
    img: [drivemnl], // Replace with the actual image import
    ProjectHeader: {
        title: 'DriveMNL',
        publishDate: 'August 2025', // Adjust date if needed
        tags: ['Web Application'],
    },
    ProjectImages: [,
        { id: 1, title: 'DriveMNL 1', img: [drivemnl1] },
        { id: 2, title: 'DriveMNL 2', img: [drivemnl2] },
    ],
    description: 'An example web app that is catered for car enthusiasts for blogs and informative contents like reviews.', // Your custom description
},
];

export const projectsCategories = [
    {
        id: 1,
        title: 'Web Application',
    },
    {
        id: 2,
        title: 'Mobile Application',
    },
	    {
        id: 3,
        title: 'Branding',
    },
];
