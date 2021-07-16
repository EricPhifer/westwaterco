import { graphql, Link } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import React from 'react';
import styled from 'styled-components';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import SEO from '../components/SEO';
import logo from '../assets/images/logo.png';

const HomeStyles = styled.div`
  text-align: center;
  height: 89vh;
  .hero {
    display: grid;
    grid-template-areas:
      '. . . . logo logo logo logo . . . .'
      '. . . . title title title title . . . .'
      '. . . . tagline tagline tagline tagline . . . .'
      '. . . . links links links links . . . .'
      '. . . . . icon icon . . . . .';
    #logo {
      grid-area: logo;
    }
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
    #title {
      grid-area: title;
    }
    .heroTitle {
      font-size: 4rem;
      text-transform: uppercase;
      text-shadow: 0px 0px 2px #f7f9fb;
      font-weight: 500;
    }
    #tagline {
      grid-area: tagline;
    }
    .heroTagline {
      font-size: 2rem;
      text-shadow: #fff 2px 2px 5px;
      margin-top: 0;
      margin-bottom: 0.9rem;
    }
    #links {
      grid-area: links;
    }
    .heroLinks {
      list-style: none;
      line-height: 1;
      color: #fff;
      fill: #fff;
      text-align: center;
      padding-left: 0;
      li {
        display: inline-block;
        margin: 2.3rem 0 5rem 2.2rem;
        -webkit-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.1);
        }
      }
      .buttonesque {
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.48);
        background-color: #5085a5;
        border-style: solid;
        border-width: 1px;
        border-color: #7a7a7a;
        border-radius: 0;
        box-shadow: 8px 5px 10px 0px rgba(0, 0, 0, 0.5);
        font-size: 13px;
        padding: 10px 20px;
        -webkit-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        &:hover {
          color: rgb(93, 109, 89);
          background-color: rgb(246, 248, 250);
          border-color: #fff;
        }
      }
      a {
        text-decoration: none;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.48);
        &:hover {
          color: inherit;
        }
      }
    }
    #icon {
      grid-area: icon;
    }
    @keyframes bounce {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(5px);
      }
    }
    .heroIcon {
      font-size: 5rem;
      animation: bounce 0.7s ease-in-out infinite alternate;
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
          <p id="tagline" className="heroTagline">
            We'll handle the engineering and environmental consulting needs you
            have for your project.
          </p>
          <ul id="links" className="heroLinks">
            <li id="projectLink">
              <Link to="/projects" role="button" className="buttonesque">
                <span>
                  <span>See Our Projects</span>
                </span>
              </Link>
            </li>
            <li id="contactLink">
              <Link to="/about#contact" role="button" className="buttonesque">
                <span>
                  <span>Contact Us</span>
                </span>
              </Link>
            </li>
          </ul>
          <div id="icon" className="iconContainer">
            <div className="heroIcon">
              <FaRegArrowAltCircleDown />
            </div>
          </div>
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
