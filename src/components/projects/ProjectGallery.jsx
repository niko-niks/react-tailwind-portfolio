import { useContext, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { IoClose } from 'react-icons/io5';

const ProjectGallery = () => {
    const { singleProjectData } = useContext(SingleProjectContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {singleProjectData.ProjectImages.map((image) => (
                <div
                    key={image.id}
                    className="mb-10 sm:mb-0 cursor-pointer"
                    onClick={() => handleImageClick(image)}
                >
                    <img
                        src={image.img}
                        className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                        alt={image.title}
                    />
                </div>
            ))}

            {/* Responsive Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 py-6 sm:p-0">
                        {/* Overlay */}
                        <div 
                            className="fixed inset-0 bg-black/75 transition-opacity"
                            onClick={handleCloseModal}
                        ></div>

                        {/* Modal Container */}
                        <div className="relative bg-secondary-light dark:bg-ternary-dark rounded-xl shadow-xl w-full max-w-xl mx-auto z-50 overflow-hidden">
                            {/* Close Button */}
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 bg-red-200 hover:bg-red-500 transition-colors duration-300 rounded-full p-2 z-50"
                            >
                                <IoClose className="w-6 h-6 text-white" />
                            </button>

                            {/* Modal Content */}
                            <div className="p-4 sm:p-6">
                                {/* Image */}
                                <div className="aspect-w-16 aspect-h-9 mb-4">
                                    <img
                                        src={selectedImage?.img}
                                        alt={selectedImage?.title}
                                        className="w-full h-auto object-contain rounded-lg"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-center sm:text-left text-ternary-dark dark:text-ternary-light">
                                        {selectedImage?.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-center sm:text-left text-ternary-dark dark:text-ternary-light">
                                        {singleProjectData.ProjectInfo.ObjectivesDetails}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectGallery;
