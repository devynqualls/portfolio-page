import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
`;

const ProjectCard = ({ title, description, link }) => {
  return (
    <Card>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </Card>
  );
};

export default ProjectCard;