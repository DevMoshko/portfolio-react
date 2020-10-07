import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectData from './../../assets/Projects.json';

const Projects = () => {
  // Get data from JSON file
  // console.log('Project data JSON file: ', ProjectData);

  return (
    <section className='projects'>
      <h2>Projects</h2>
      <ul className='projects__list'>
        {ProjectData.map((project) => {
          return <ProjectCard key={project.projectTitle} project={project} />;
        })}
      </ul>
    </section>
  );
};

export default Projects;
