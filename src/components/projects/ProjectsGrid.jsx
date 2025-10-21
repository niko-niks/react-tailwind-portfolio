import { useContext, useState } from 'react';
import { FiSearch, FiClock, FiTag } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

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

    // Remove singleProjectData reference and use project's own images
    const getProjectImages = (project) => {
        return project.ProjectImages?.slice(0, 3) || [{ img: project.img }];
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-hidden">
        <div className="flex items-start justify-center min-h-screen px-4 py-6 sm:p-0">
            <div className="bg-secondary-light dark:bg-ternary-dark rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl relative">
                {/* Close button with theme-adjusted colors */}
                <button
                    onClick={() => {
                        setIsPopupOpen(false);
                        document.body.style.overflow = 'unset'; // Re-enable background scroll
                    }}
                    className="absolute top-4 right-4 bg-primary-light dark:bg-ternary-dark p-2 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-ternary-dark dark:focus:ring-ternary-light transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Close modal"
                >
                    <span className="text-ternary-dark dark:text-ternary-light text-xl">&times;</span>
                </button>
                
                {/* Modal content with scrollable inner container */}
                <div className="overflow-y-auto max-h-[90vh] p-4 sm:p-6">
                    <div className="text-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-ternary-dark dark:text-ternary-light mb-4">
                            {selectedProject.title}
                        </h3>
                        <p className="text-base sm:text-lg text-ternary-dark dark:text-ternary-light mb-4">
                            Category: {selectedProject.category}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            {getProjectImages(selectedProject).map((img, index) => (
                                <img
                                    key={index}
                                    src={img.img}
                                    alt={`${selectedProject.title} Image ${index + 1}`}
                                    className="w-full h-auto object-contain rounded-lg"
                                />
                            ))}
                        </div>
                        
                        {/* Project details */}
                        <div className="mt-4">
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-2 space-y-2 sm:space-y-0">
                                <div className="flex items-center">
                                    <FiClock className="text-lg text-ternary-dark dark:text-ternary-light mr-2" />
                                    <span className="text-base sm:text-lg text-ternary-dark dark:text-ternary-light">
                                        {selectedProject.ProjectHeader.publishDate}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <FiTag className="text-lg text-ternary-dark dark:text-ternary-light mr-2" />
                                    <span className="text-base sm:text-lg text-ternary-dark dark:text-ternary-light">
                                        {selectedProject.ProjectHeader.tags.join(', ')}
                                    </span>
                                </div>
                            </div>
                            <p className="text-base sm:text-lg text-ternary-dark dark:text-ternary-light mt-4">
                                {selectedProject.description || 
                                 selectedProject.ProjectInfo?.ObjectivesDetails ||
                                 `A ${selectedProject.category} project.`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Overlay for closing on click/tap */}
        <div 
            className="fixed inset-0 z-40"
            onClick={() => {
                setIsPopupOpen(false);
                document.body.style.overflow = 'unset'; // Re-enable background scroll
            }}
            aria-hidden="true"
        ></div>
    </div>
)}
        </section>
    );
};

export default ProjectsGrid;