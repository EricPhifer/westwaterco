import React from 'react';
import { graphql, Link } from 'gatsby';
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
  /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.3.6,
* Autoprefixer: v10.3.1
* Browsers: last 4 version
*/

  text-align: center;
  .hero {
    width: 100vw;
    height: 100vh;
    display: -ms-grid;
    display: grid;
    grid-template-areas:
      '. . . . logo logo logo logo . . . .'
      '. . . . title title title title . . . .'
      '. . . . tagline tagline tagline tagline . . . .'
      '. . . . links links links links . . . .'
      '. . . . . icon icon . . . . .';
    #logo {
      -ms-grid-row: 1;
      -ms-grid-column: 5;
      -ms-grid-column-span: 4;
      grid-area: logo;
    }
    .logoContainer {
      -ms-grid-row-align: center;
      -ms-grid-column-align: center;
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
      -ms-grid-row: 2;
      -ms-grid-column: 5;
      -ms-grid-column-span: 4;
      grid-area: title;
    }
    .heroTitle {
      font-size: 3.5rem;
      text-transform: uppercase;
      font-weight: 450;
    }
    #tagline {
      -ms-grid-row: 3;
      -ms-grid-column: 5;
      -ms-grid-column-span: 4;
      grid-area: tagline;
    }
    .heroTagline {
      font-size: 1.65rem;
    }
    #links {
      -ms-grid-row: 4;
      -ms-grid-column: 5;
      -ms-grid-column-span: 4;
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
          -webkit-transform: scale(1.1);
          -ms-transform: scale(1.1);
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
        -webkit-box-shadow: 8px 5px 10px 0px rgba(0, 0, 0, 0.5);
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
      -ms-grid-row: 5;
      -ms-grid-column: 6;
      -ms-grid-column-span: 2;
      grid-area: icon;
    }
    @-webkit-keyframes bounce {
      from {
        -webkit-transform: translateY(0);
      }
      to {
        -webkit-transform: translateY(5px);
      }
    }
    @keyframes bounce {
      from {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      to {
        -webkit-transform: translateY(5px);
        transform: translateY(5px);
      }
    }
    .heroIcon {
      font-size: 5rem;
      -webkit-animation: bounce 0.7s ease-in-out infinite alternate;
      animation: bounce 0.7s ease-in-out infinite alternate;
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
    .pageSection {
      &:nth-child(1) {
        /* engineering section style */
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
      &:nth-child(2) {
        /* environmental section styling */
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
      &:nth-child(3) {
        /* about us section styling */
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
  }
  /* Responsive Design */
  @media only screen and (min-width: 1200px) {
    .pageSection {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      .heroTitle {
        font-size: 3rem;
      }
    }
    .mainSection {
      .pageSection {
        a {
          font-size: 3rem;
        }
        .contentContainer {
          p {
            font-size: 1.35rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .hero {
      .heroTitle {
        font-size: 2.7rem;
      }
      .heroTagline {
        font-size: 1.5rem;
      }
      .heroLinks {
        .buttonesque {
          padding: 7px 11px;
        }
      }
    }
    .mainSection {
      .pageSection {
        .contentContainer {
          p {
            font-size: 1.45rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 350px) {
    .hero {
      .heroLogo {
        width: 30rem;
        height: 30rem;
      }
      .heroTitle {
        font-size: 2.2rem;
      }
      .heroTagline {
        font-size: 1.2rem;
      }
      .heroLinks {
        .buttonesque {
          font-size: 10px;
          padding: 7px 10px;
        }
      }
    }
    .mainSection {
      .pageSection {
        a {
          font-size: 2.6rem;
        }
        .contentContainer {
          p {
            font-size: 1.3rem;
          }
        }
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
              {homepage.map((home) => (
                <div key={home.id} className="pageSection">
                  <Link to={home.pageUrl} className="linkSection">
                    <div className="sectionTitle">{home.title}</div>
                    <div className="contentContainer">
                      {home.contents.map((content) => (
                        <p key={content} className="content">
                          {' '}
                          {content}
                        </p>
                      ))}
                    </div>
                  </Link>
                </div>
              ))}
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
        contents
        title
        pageUrl
      }
    }
  }
`;
