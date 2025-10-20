import React from 'react';
import { toolsHeading, toolsData } from '../../data/toolsData';
import ToolItem from './ToolItem';

const ToolsSection = () => {
    return (
        <section className="my-12">
            <h2 className="text-2xl font-semibold text-center mb-6 text-ternary-dark dark:text-ternary-light">
                {toolsHeading}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 mt-6 gap-4">
                {toolsData.map((tool) => (
                    <ToolItem title={tool.title} image={tool.img} key={tool.id} />
                ))}
            </div>
        </section>
    );
};

export default ToolsSection;