import { graphql, Link } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import logo from '../assets/images/logo.png';

const HomeStyles = styled.div`
  text-align: center;
  .hero {
    display: grid;
    grid-template-areas:
      '. . . . logo logo logo logo . . . .'
      '. . . . title title title title . . . .'
      '. . . . tagline tagline tagline tagline . . . .'
      '. . . . links links links links . . . .';
    .logoContainer {
      place-self: center center;
    }
    .heroLogo {
      width: 35rem;
      height: 35rem;
      background-image: url(${logo});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
    #logo {
      grid-area: logo;
    }
    #title {
      grid-area: title;
    }
    #tagline {
      grid-area: tagline;
    }
    #links {
      grid-area: links;
    }
    #projectLink {
      grid-area: projectLink;
    }
    #contactLink {
      grid-area: contactLink;
    }
  }
  @media (max-width: 400px) {
    .heroBG {
      h1 {
        font-size: 2.22rem;
      }
    }
    .homeContent {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 401px) and (max-width: 600px) {
    .heroBG {
      h1 {
        font-size: 2.6rem;
      }
    }
  }
`;

export default function HomePage({ data }) {
  const homepage = data.home.nodes;
  return (
    <>
      <SEO title="Home Page" />
      <HomeStyles>
        <div className="hero">
          <div id="logo" className="logoContainer">
            <div className="heroLogo" />
          </div>
          <div id="title" className="heroTitle">
            Consulting Engineers and Scientists
          </div>
          <div id="tagline" className="heroTagline">
            We'll handle the engineering and environmental consulting needs you
            have for your project.
          </div>
          <ul id="links" className="heroLinks">
            <li id="projectLink">
              <Link to="/projects" role="button">
                <span className="buttonesqe">
                  <span>See Our Projects</span>
                </span>
              </Link>
            </li>
            <li id="contactLink">
              <Link to="/about#contact" role="button">
                <span className="buttonesqe">
                  <span>Contact Us</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </HomeStyles>
    </>
  );
}

export const query = graphql`
  query {
    home: allSanityHomepage {
      nodes {
        id
        contents {
          content
          contentURL
          heading
        }
        welcome
      }
    }
  }
`;
