import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import SanityImage from 'gatsby-plugin-sanity-image';
import SEO from '../components/SEO';
import logo from '../assets/images/logo.png';

const ProjectStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 75px;
  background-color: var(--white);
  h1 {
    margin-bottom: 2rem;
    color: rgba(83, 89, 95, 1);
    font-size: 3.7rem;
    text-align: center;
    text-transform: uppercase;
  }
  .bottomGap {
    padding: 0.5rem;
    width: 100%;
  }
  .filterContainer {
    text-align: center;
    display: grid;
    grid-template-areas: '. . . . all eng env . . . .';
    button {
      background: inherit;
      box-shadow: none;
    }
    .filterTitle {
      position: relative;
      color: black;
      font-size: 1.5rem;
      place-self: center;
      margin-bottom: 2rem;
      &:hover {
        cursor: pointer;
      }
      &:after {
        content: '';
        border-bottom: 2px solid orangered;
        left: 50%;
        position: absolute;
        top: 110%;
        transition: all 0.2s ease-in-out;
        width: 0;
      }
      &:hover:after {
        left: 0;
        width: 100%;
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
  .noImage {
    background-color: rgba(255, 255, 255, 0.5);
  }
  .imgContainer {
    background-color: rgba(255, 255, 255, 0.4);
    position: relative;
    place-self: center;
    height: 275px;
    width: 100%;
    .projectTitle {
      opacity: unset;
      opacity: 1;
    }
    .hoverOverlay {
      opacity: 0.6;
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
    color: rgba(255, 255, 255, 1);
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .inactive {
    display: none;
  }
  @media only screen and (max-width: 786px) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(auto, 1fr));
  }
`;

function activateTrue() {
  const boolParents = document.getElementsByTagName('div');
  for (let i = 0; i < boolParents.length; i += 1) {
    const parent = boolParents[i];
    if (parent.className.match(/\bfalse\b/)) {
      parent.classList.add('inactive');
    }
    if (parent.className.match(/\btrue\b/)) {
      parent.classList.remove('inactive');
    }
  }
}
function activateFalse() {
  const boolParents = document.getElementsByTagName('div');
  for (let i = 0; i < boolParents.length; i += 1) {
    const parent = boolParents[i];
    if (parent.className.match(/\btrue\b/)) {
      parent.classList.add('inactive');
    }
    if (parent.className.match(/\bfalse\b/)) {
      parent.classList.remove('inactive');
    }
  }
}
function activateAll() {
  const boolParents = document.getElementsByTagName('div');
  for (let i = 0; i < boolParents.length; i += 1) {
    const parent = boolParents[i];
    if (parent.className.match(/\btrue\b/)) {
      parent.classList.remove('inactive');
    }
    if (parent.className.match(/\bfalse\b/)) {
      parent.classList.remove('inactive');
    }
  }
}
export default function Projects({ data }) {
  const projects = data.projects.nodes;
  return (
    <>
      <SEO title="Projects Page" />
      <ProjectStyles>
        <h1>Projects</h1>
        <div className="filterContainer">
          <button
            type="button"
            value="Filter Button"
            onClick={activateAll}
            id="allFilter"
          >
            {' '}
            <div className="filterTitle">All</div>
          </button>
          <button
            type="button"
            value="Filter Button"
            onClick={activateTrue}
            id="engFilter"
          >
            {' '}
            <div className="filterTitle">Engineering</div>
          </button>
          <button
            type="button"
            value="Filter Button"
            onClick={activateFalse}
            id="envFilter"
          >
            {' '}
            <div className="filterTitle">Environmental</div>
          </button>
        </div>
        <GridStyles>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`imgContainer ${project.isEngineering}`}
            >
              <Link to={project.slug.current}>
                {project.image ? (
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
                ) : (
                  <span className="noImage" />
                )}
                <div className="hoverOverlay">
                  <div className="projectTitle">{project.mainTitle}</div>
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
