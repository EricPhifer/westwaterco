import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import SanityImage from 'gatsby-plugin-sanity-image';
import SEO from '../components/SEO';

const ProjectStyles = styled.div`
  text-align: center;
  padding-top: 75px;
  background-color: white;
  h1 {
    margin-bottom: 2rem;
    color: rgba(83, 89, 95, 1);
    font-size: 3.7rem;
    text-align: center;
    text-transform: uppercase;
  }
  .filterContainer {
    text-align: center;
    display: grid;
    grid-template-areas: '. . . . all eng env . . . .';
    p {
      place-self: center;
      color: black;
      font-size: 1.5rem;
      &:hover {
        cursor: pointer;
      }
    }
    #allFilter {
      grid-area: all;
    }
    #engFilter {
      grid-area: eng;
    }
    #envFilter {
      grid-area: env;
    }
  }
  .bottomGap {
    padding: 0.5rem;
    width: 100%;
  }
`;

const GridStyles = styled.div`
  text-align: center;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  grid-template-rows: auto;
  gap: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  a {
    text-decoration: none;
  }
  .imgContainer {
    position: relative;
    place-self: center;
    height: 275px;
    width: 100%;
    border: 1px black solid;
    &:hover .hoverOverlay {
      opacity: 0.5;
    }
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  .hoverOverlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease-in-out;
    background-color: blue;
  }
  .projectTitle {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

export default function Projects({ data }) {
  const projects = data.projects.nodes;
  return (
    <>
      <SEO title="Projects" />
      <ProjectStyles>
        <h1>Projects</h1>
        <div className="filterContainer">
          <p id="allFilter" className="filterTitle">
            All
          </p>
          <p id="engFilter" className="filterTitle">
            Engineering
          </p>
          <p id="envFilter" className="filterTitle">
            Environmental
          </p>
        </div>
        <GridStyles>
          {projects.map((project) => (
            <div key={project.id} className="imgContainer">
              {console.log({ project })}
              <Link to={project.slug.current}>
                <SanityImage
                  {...project.image}
                  alt={project.mainTitle}
                  style={{
                    width: '100%',
                    height: '275px',
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
                <div className="hoverOverlay">
                  <span className="projectTitle">{project.mainTitle}</span>
                </div>
              </Link>
            </div>
          ))}
        </GridStyles>
        <div className="bottomGap" />
      </ProjectStyles>
    </>
  );
}

export const query = graphql`
  query {
    projects: allSanityProjects {
      nodes {
        id
        mainTitle
        isEngineering
        image {
          ...ImageWithPreview
        }
        slug {
          current
        }
      }
    }
  }
`;
