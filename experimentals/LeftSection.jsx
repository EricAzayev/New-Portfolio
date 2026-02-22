import React from "react";

const LeftSection = () => {
  const description = [
    "I am an emerging software development professional with a project management and aerospace engineering background. I am pursuing a Sprinternship with Morgan Stanley and await my company match with CUNY Spring Forward! I am building my app development skills by learning React through CodePath and separate Android Studio Projects. I aspire to work on simulative projects that assist in physics simulations and remote sensing.",
    "Welcome to the Data Section!",
    "Welcome to the Game Section!",
    "Welcome to the FullStack Section!",
  ];
  return (
    <div className="left-content">
      <br />
      <br />
      <br />
      <h1>Eric Azayev</h1>
      <br />
      <h4>Software Engineer</h4>
      <br />
      <h5>
        I am an emerging software development professional with a project
        management and aerospace engineering background. I am pursuing a
        Sprinternship with Morgan Stanley and await my company match with CUNY
        Spring Forward! I am building my app development skills by learning
        React through CodePath and separate Android Studio Projects. I aspire to
        work on simulative projects that assist in physics simulations and
        remote sensing.
      </h5>
      <div className="icons">
        <a
          href="https://github.com/EricAzayev"
          className="github-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a
          href=""
          className="linkedin-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a
          href="mailto:azayeveric@gmail.com"
          className="gmail-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="mail-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default LeftSection;
