import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    link: '#',
  },
];

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;