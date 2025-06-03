import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider
} from './ProjectsStyle';

import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  // Get unique categories dynamically from the projects array
  const categories = ['all', ...new Set(projects.map((project) => project.category))];

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, including web applications, graphic design, and UI/UX design. Here are some of my works.
        </Desc>

        <ToggleButtonGroup>
          {categories.map((category, index) => (
            <React.Fragment key={category}>
              <ToggleButton
                active={toggle === category}
                value={category}
                onClick={() => setToggle(category)}
              >
                {category === 'all' ? 'All' : category}
              </ToggleButton>
              {index < categories.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {(toggle === 'all'
            ? projects
            : projects.filter((project) => project.category === toggle)
          ).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
