import React from 'react';

const ToolItem = ({ title, image }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="h-24 w-24 flex items-center justify-center p-4 bg-ternary-light dark:bg-ternary-dark rounded">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain transition duration-300"
                    style={{ maxWidth: '64px', maxHeight: '64px', display: 'block' }}
                />
            </div>
            <span className="text-sm mt-2 text-center text-ternary-dark dark:text-ternary-light">
                {title}
            </span>
        </div>
    );
};

export default ToolItem;

