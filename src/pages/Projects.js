import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled.div`
  padding: 20px;
`;

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
    <ProjectsContainer>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;