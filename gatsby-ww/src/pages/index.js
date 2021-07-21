import React from 'react';
import { graphql, Link } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import SEO from '../components/SEO';
import logo from '../assets/images/logo.png';
import homeBG from '../assets/images/homeBG.jpg';

const BGStyles = styled.div`
  padding-top: 75px;
  background-image: url(${homeBG});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

const HomeStyles = styled.div`
  text-align: center;
  .hero {
    width: 100vw;
    height: 100vh;
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
      font-size: 3.5rem;
      text-transform: uppercase;
      font-weight: 450;
    }
    #tagline {
      grid-area: tagline;
    }
    .heroTagline {
      font-size: 1.65rem;
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
        margin: 2.3rem 2.25rem 5rem 0;
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
  .whiteOverlay {
    background-color: rgba(255, 255, 255, 0.7);
  }
  .mainSection {
    a {
      text-decoration: none;
      text-align: center;
      font-size: 3.6rem;
    }
    .engineeringSection {
      padding: 1.5% 1%;
      p {
        color: black;
        font-size: 1.75rem;
        text-align: left;
      }
      a {
        color: black;
      }
      .contentContainer {
        margin: 3% 1%;
        padding: 3%;
        background-color: rgba(158, 174, 155, 1);
        border-radius: 10px;
        border: 10px black double;
      }
    }
    .environmentalSection {
      padding: 1.5% 1%;
      p {
        color: white;
        font-size: 1.75rem;
        text-align: left;
      }
      a {
        color: rgba(18, 164, 89, 1);
      }
      .contentContainer {
        margin: 3% 1%;
        padding: 3%;
        background-color: rgba(18, 164, 89, 1);
        border-radius: 10px;
        border: 10px white double;
      }
    }
    .aboutSection {
      padding: 1.5% 1%;
      p {
        color: rgba(35, 113, 141, 1);
        font-size: 1.75rem;
        text-align: left;
      }
      a {
        color: rgba(35, 113, 141, 1);
      }
      .contentContainer {
        margin: 3% 1%;
        padding: 3%;
        background-color: white;
        border-radius: 10px;
        border: 10px rgba(35, 113, 141, 1) double;
      }
    }
  }
`;

export default function HomePage({ data }) {
  const homepage = data.home.nodes;
  return (
    <>
      <SEO title="Home Page" />
      <BGStyles>
        <HomeStyles>
          <div className="hero">
            <div id="logo" className="logoContainer">
              <div className="heroLogo" />
            </div>
            <div id="title" className="heroTitle">
              Consulting Engineers and Scientists
            </div>
            <p id="tagline" className="heroTagline">
              We'll handle the engineering and environmental consulting needs
              you have for your project.
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
          <div className="whiteOverlay">
            <div className="mainSection">
              {/* Repeatable title, link and array content here */}
              <div className="engineeringSection">
                <Link to="/home.link" className="linkSection">
                  <div className="sectionTitle">Engineering</div>
                  <div className="contentContainer">
                    <p className="content">
                      Our engineering department specializes in the drinking
                      water and domestic wastewater utility services. <br />
                      <br />
                      Services include field investigations, data collection,
                      long-range planning, feasibility studies, permitting,
                      preliminary design, preparation of Plans and
                      Specifications, contract administration and construction
                      inspection.
                    </p>{' '}
                  </div>
                </Link>
              </div>
              {/* Repeatable title, link and array content here */}
              <div className="environmentalSection">
                <Link to="/home.link" className="linkSection">
                  <div className="sectionTitle">Environmental</div>
                  <div className="contentContainer">
                    <p className="content">
                      Our diverse environmental staff of biologists, resource
                      specialists, GIS analysts, hydrologists, and geologists
                      allows us to foresee potential project hurdles related to
                      natural resource issues and to identify workable
                      solutions.{' '}
                    </p>{' '}
                  </div>
                </Link>
              </div>
              {/* Repeatable title, link and array content here */}
              <div className="aboutSection">
                <Link to="/home.link" className="linkSection">
                  <div className="sectionTitle">About Us</div>
                  <div className="contentContainer">
                    <p className="content">
                      WestWater Engineering was founded in 1979 to provide
                      planning and design services for drinking water and
                      domestic wastewater systems. <br /> <br /> Growing and
                      diversified client needs led to development of expertise
                      in related fields of environmental science. <br /> <br />
                      The ability to fully integrate engineering design and
                      environmental resources allows us to carry a project
                      through from planning and permitting to design and our
                      ability to work as a project team with other consultants,
                      regulatory agencies, and clients allows us to achieve
                      project goals in a timely and cost effective manner.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </HomeStyles>
      </BGStyles>
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
