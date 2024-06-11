import React from 'react';
import { Link } from 'react-router-dom';
import "../variables.css";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Holidaze",
      description: "A website for booking your next trip, just like Airbnb!",
      imageUrl: "/holidaze/holidaze-hero.png",
      link: "/holidaze",
    },
    {
      id: 2,
      title: "Gavel",
      description: "A website for bidding on different products for everyone!",
      imageUrl: "/gavel/gavel2.png",
      link: "/gavel",
    },
    {
      id: 3,
      title: "Wedding Photographer Blog",
      description: "A blog for updates about being either a photographer or a client.",
      imageUrl: "/wedphotblog1.png",
      link: "/weddingphotogr",
    },
    {
      id: 4,
      title: "Community Science Museum",
      description: "A website including a blog for updates about being a photographer or a client.",
      imageUrl: "/csm1.png",
      link: "/csm",
    },
    {
      id: 5,
      title: "DogLibrary",
      description: "A website including a blog for updates about dogs.",
      imageUrl: "/doglibr1.png",
      link: "/doglibrary",
    },
    {
      id: 6,
      title: "RainyDays",
      description: "A blog for updates about rainy day activities.",
      imageUrl: "/rainydays2.png",
      link: "/rainydays",
    },
  ];

  return (
    <main className='projectSection'>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.imageUrl} alt={`Screenshot from the ${project.title} webpage`} className="project-image" />
          <div className="project-text">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link to={project.link} rel="noopener noreferrer">
              <button>More about this project</button>
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
};

export default ProjectSection;
