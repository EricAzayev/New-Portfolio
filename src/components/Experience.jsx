import React from 'react';

const Experience = ({ title, date, description }) => {
    return (
        <div className="experience">
            <div className="heading">
                <h6 className="date">{date}</h6>
                <h5 className="title">{title}</h5>
            </div>
            <p className="description">{description}</p>
        </div>
    );
};

export default Experience;