import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// Data, separate the logic from components and contents
import { projects } from '../../constants/constants';

{/* How to separate data from components (4): move the data to a separate file or database, or managed by a CMS*/}
// const projectData = [{
//   title: "Project 1",
//   description: "This is a really really long description about this project."
// },
// {
//   title: "Project 2",
//   description: "This is a really really long description about this project."
// },
// {
//   title: "Project 3",
//   description: "This is a really really long description about this project."
// },
// {
//   title: "Project 4",
//   description: "This is a really really long description about this project."
// },
// {
//   title: "Project 5",
//   description: "This is a really really long description about this project."
// }];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
    {/* HHow to separate data from components (1) */}
      {/* {[0, 1, 2, 3, 4].map((project, index) => (
        <div key={index}>
          {project}
        </div>
      ))} */}

      {/* How to separate data from components (2)*/}
      {/* {[{
        title: "Project 1",
        description: "This is a really really long description about this project."
      },
      {
        title: "Project 2",
        description: "This is a really really long description about this project."
      },
      {
        title: "Project 3",
        description: "This is a really really long description about this project."
      },
      {
        title: "Project 4",
        description: "This is a really really long description about this project."
      },
      {
        title: "Project 5",
        description: "This is a really really long description about this project."
      }].map((project, index) => (
        <div key={index}>
          {project.title}
          <br />
          {project.description}
        </div>
      ))} */}

      {/* How to separate data from components (3)*/}
      {/* {projectData.map((project, index) => (
        <div key={index}>
          {project.title}
          <br />
          {project.description}
        </div>
      ))} */}
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image} />
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit}>Code</ExternalLinks>
            <ExternalLinks href={project.source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;