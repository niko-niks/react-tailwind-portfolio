import { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';
import { singleProjectData } from '../../data/singleProjectData'; // Import single project data

const ProjectsGrid = () => {
    const {
        projects,
        searchProject,
        setSearchProject,
        searchProjectsByTitle,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
    } = useContext(ProjectsContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsPopupOpen(true);
    };

    // Find matching images from singleProjectData based on project ID
    const getProjectImages = (id) => {
        return singleProjectData.ProjectImages.filter(img =>
            projects.find(p => p.id === id)?.title === img.title
        ).slice(0, 3); // Limit to 3 images
    };

    return (
        <section className="py-5 sm:py-10 mt-5 sm:mt-10">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Projects portfolio
                </p>
            </div>

            <div className="mt-10 sm:mt-16">
                <h3
                    className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
                >
                    Search projects by title or filter by category
                </h3>
                <div
                    className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
                >
                    <div className="flex justify-between gap-2">
                        <span
                            className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
                        >
                            <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
                        </span>
                        <input
                            onChange={(e) => {
                                setSearchProject(e.target.value);
                            }}
                            className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
                            id="name"
                            name="name"
                            type="search"
                            required=""
                            placeholder="Search Projects"
                            aria-label="Name"
                        />
                    </div>

                    <ProjectsFilter setSelectProject={setSelectProject} />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
                {selectProject
                    ? selectProjectsByCategory.map((project) => (
                          <ProjectSingle
                              title={project.title}
                              category={project.category}
                              image={project.img}
                              key={project.id}
                              onClick={() => handleProjectClick(project)}
                          />
                      ))
                    : searchProject
                    ? searchProjectsByTitle.map((project) => (
                          <ProjectSingle
                              title={project.title}
                              category={project.category}
                              image={project.img}
                              key={project.id}
                              onClick={() => handleProjectClick(project)}
                          />
                      ))
                    : projects.map((project) => (
                          <ProjectSingle
                              title={project.title}
                              category={project.category}
                              image={project.img}
                              key={project.id}
                              onClick={() => handleProjectClick(project)}
                          />
                      ))}
            </div>

            {/* Popup Modal */}
            {isPopupOpen && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-secondary-light dark:bg-ternary-dark p-6 rounded-lg shadow-lg max-w-2xl w-full">
						<button
                            onClick={() => setIsPopupOpen(false)}
                            className="absolute top-4 right-6 text-red-200 hover:text-red-500 text-3xl font-bold"
                        >
                            &times;
                        </button>
						<p>
                        <h3 className="text-2xl font-bold text-ternary-dark dark:text-ternary-light mb-4">
                            {selectedProject.title}
                        </h3>
						</p>
                        <p className="text-lg text-ternary-dark dark:text-ternary-light mb-4">
                            Category: {selectedProject.category}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            {getProjectImages(selectedProject.id).map((img, index) => (
                                <img
                                    key={index}
                                    src={img.img}
                                    alt={`${selectedProject.title} Image ${index + 1}`}
                                    className="w-30 h-30 object-cover rounded-lg"
                                />
                            ))}
                        </div>
                        {/* Dynamic details based on project */}
                       {selectedProject.id === 1 && (
                            <>
                                <p className="text-ternary-dark dark:text-ternary-light mb-2">
                                    Tags: UI / Frontend, Web Development<br />
                                    Date: Jul 26, 2021
                                </p>
                                <p className="text-ternary-dark dark:text-ternary-light pt-4"> {/* Added pt-4 for top padding */}
                                    Description: A project management UI built with React and TailwindCSS.
                                </p>
                            </>
                        )}
                        {selectedProject.id === 2 && (
                            <>
                                <p className="text-ternary-dark dark:text-ternary-light mb-2">
                                    Tags: Mobile Development
                                </p>
                                <p className="text-ternary-dark dark:text-ternary-light pt-4"> {/* Added pt-4 for top padding */}
                                    Description: A mobile app for monitoring blood pressure with real-time data.
                                </p>
                            </>
                        )}
                        {selectedProject.id === 3 && (
                            <>
                                <p className="text-ternary-dark dark:text-ternary-light mb-2">
                                    Tags: Mobile Development, React
                                </p>
                                <p className="text-ternary-dark dark:text-ternary-light pt-4"> {/* Added pt-4 for top padding */}
                                    Description: A social networking app built with React Native.
                                </p>
                            </>
                        )}
                        {selectedProject.id === 4 && (
                            <>
                                <p className="text-ternary-dark dark:text-ternary-light mb-2">
                                    Tags: UI / Frontend, Web Design
                                </p>
                                <p className="text-ternary-dark dark:text-ternary-light pt-4"> {/* Added pt-4 for top padding */}
                                    Description: A design system for Apple-inspired web applications.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsGrid;