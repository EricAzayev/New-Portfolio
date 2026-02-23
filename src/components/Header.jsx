//The header is the box displaying the title of the project and a brief description with a picture. 
//Header Component will be used in the FullStackPage, BlogPage, and D component.
//Will be a box 30% wide, 30% tall. 

import React from "react";

function Header(images, title, description) {
    if (images.length > 1) {
        // Handle multiple images with a slider
        return (
            <div className="header-container">
                <h1 className="header-title">{title}</h1>
                <p className="header-description">{description}</p>
                {/* Slider component goes here */}
            </div>
        );
    }
  return (
    <div className="header-container">
      <h1 className="header-title">{title}</h1>
      <p className="header-description">{description}</p>
      <img src={images[0]} alt="Project" className="header-image" />
    </div>
  );
}

export default Header;