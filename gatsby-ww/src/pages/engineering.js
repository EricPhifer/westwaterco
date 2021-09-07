import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import SanityImage from 'gatsby-plugin-sanity-image';
import SEO from '../components/SEO';
import engBG from '../assets/images/engBG.jpg';

const EngStyles = styled.div`
  text-align: center;
  padding-top: 60px;
  height: 100vh;
  width: 100vw;
  background-image: url(${engBG});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  .overlay {
    width: 100vw;
    height: 98vh;
    margin-top: 15px;
    background-color: rgba(84, 89, 95, 0.3);
  }
  .hero {
    max-width: 600px;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
      '. title title title title .'
      '. tagline1 tagline1 tagline1 tagline1 .'
      '. services services services services .'
      '. tagline2 tagline2 tagline2 tagline2 .'
      '. . icon icon . .';
    #title {
      grid-area: title;
    }
    .heroTitle {
      font-size: 3.5rem;
      text-transform: uppercase;
      font-weight: 450;
    }
    #serviceScroll {
      grid-area: services;
    }
    .scrollList {
      &::before {
        content: '';
        -ms-animation: serviceScroll 30s ease-in-out 1s infinite;
        -ms-transition: opacity serviceScroll 0.5s;
        -webkit-animation: serviceScroll 30s ease-in-out 1s infinite;
        -webkit-transition: opacity serviceScroll 0.5s;
        animation: serviceScroll 30s ease-in-out 1s infinite;
        transition: opacity serviceScroll 0.5s;
      }
    }
    @keyframes serviceScroll {
      0% {
        content: 'Long-Range Planning';
        opacity: 1;
      }
      6% {
        opacity: 0;
      }
      12% {
        content: 'Preliminary Design';
        opacity: 1;
      }
      18% {
        opacity: 0;
      }
      24% {
        content: 'Construction Inspection';
        opacity: 1;
      }
      30% {
        opacity: 0;
      }
      36% {
        content: 'Data Collection';
        opacity: 1;
      }
      42% {
        opacity: 0;
      }
      48% {
        content: 'Feasibility Studies';
        opacity: 1;
      }
      54% {
        opacity: 0;
      }
      60% {
        content: 'Permitting';
        opacity: 1;
      }
      66% {
        opacity: 0;
      }
      72% {
        content: 'Field Investigations';
        opacity: 1;
      }
      78% {
        opacity: 0;
      }
      84% {
        content: 'Contract Administration';
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
    }
    @keyframes flip {
      from {
        transform: rotate3d(0deg);
      }
      to {
        transform: rotate3d(180deg);
      }
    }
    .heroServices {
      font-size: 2.5rem;
    }
    #tagline1 {
      grid-area: tagline1;
    }
    #tagline2 {
      grid-area: tagline2;
    }
    .heroTagline {
      font-size: 1.65rem;
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
      padding-top: 10vh;
      font-size: 5rem;
      animation: bounce 0.7s ease-in-out infinite alternate;
    }
  }
  @media only screen and (max-width: 786px) {
    .hero {
      padding-top: 80px;
      .heroTitle {
        font-size: 2.6rem;
      }
      .heroTagline {
        font-size: 1.5rem;
        padding: 0 0.5rem;
      }
      .heroServices {
        font-size: 2rem;
      }
      .homeContent {
        font-size: 1.5rem;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .hero {
      .heroTitle {
        font-size: 2.22rem;
      }
    }
  }
  @media only screen and (max-width: 350px) {
    .hero {
      .heroTitle {
        font-size: 2rem;
      }
    }
  }
`;

const MainStyles = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 1rem;
  background: rgba(247, 249, 251, 1);
  color: rgba(83, 89, 95, 1);
  h2 {
    text-align: center;
    text-decoration: none;
    font-size: 3rem;
    padding-top: 1%;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.5;
  }
  .serviceSection {
    padding-top: 2%;
    display: grid;
    grid-template-areas:
      '. water water water water water wastewater wastewater wastewater wastewater wastewater . '
      '. admin admin admin admin admin other other other other other . '
      '. . . . . link link . . . . . ';
    gap: 2rem;
    img {
      height: 400px;
    }
  }
  #main {
    grid-area: main;
  }
  .mainSection {
    padding: 0 0 2rem 0;
  }
  #Water {
    grid-area: water;
  }
  #Wastewater {
    grid-area: wastewater;
  }
  #Contract {
    grid-area: admin;
  }
  #Other {
    grid-area: other;
  }
  #links {
    grid-area: link;
  }
  .serviceLinks {
    list-style: none;
    line-height: 1;
    color: #fff;
    fill: #fff;
    text-align: center;
    padding-left: 0;
    li {
      display: inline-block;
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
      border-radius: 10px;
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

  @media only screen and (max-width: 786px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      line-height: normal;
    }
    .serviceSection {
      grid-template-areas:
        'water water water water'
        'wastewater wastewater wastewater wastewater'
        'admin admin admin admin'
        'other other other other'
        '. link link .';
      grid-template-rows: auto;
      gap: 0;
      img {
        max-width: 450px;
        height: auto;
      }
      span {
        display: block;
        max-width: 450px;
        margin: 0 auto;
      }
      .services {
        padding-bottom: 2rem;
      }
    }
  }
`;

export default function EngPage({ data }) {
  const engineering = data.engineering.nodes;
  return (
    <>
      <SEO title="Engineering Consulting" />
      <EngStyles>
        <div className="overlay">
          <div className="hero">
            <h1 id="title" className="heroTitle">
              Professional Engineering Consulting
            </h1>
            <p id="tagline1" className="heroTagline">
              Our engineers specialize in the drinking water and domestic
              wastewater utility services.
            </p>
            <p id="serviceScroll" className="heroServices">
              Services Include: <br />
              <span className="scrollList"> </span>
            </p>
            <p id="tagline2" className="heroTagline">
              We can also assist in plant operations and preparation of
              municipal codes, ordinances and assessment of tap fees and monthly
              users charges.
            </p>
            <div id="icon" className="iconContainer">
              <div className="heroIcon">
                <FaRegArrowAltCircleDown />
              </div>
            </div>
          </div>{' '}
        </div>
      </EngStyles>
      <MainStyles>
        {/* main title & content after image */}
        {engineering.map((eng) => (
          <div key={eng.id} id="main" className="mainSection">
            <h2 className="mainTitle">{eng.mainTitle}</h2>
            <p className="mainContent">{eng.mainContent}</p>
            <div className="serviceSection">
              {eng.serviceBreakdown.map((service) => (
                <div key={service._key} id={service.serviceTitle.split(' ', 1)}>
                  {/* subsection titles, images & contents */}
                  <div className="services">
                    <div className="serviceImage">
                      <SanityImage
                        {...service.image}
                        alt={service.serviceTitle}
                        style={{
                          width: '100%',
                          objectFit: 'cover',
                          auto: 'format',
                        }}
                      />
                    </div>
                    <h2 className="serviceTitle">{service.serviceTitle}</h2>
                    {service.serviceContent.map((content) => (
                      <span key={content}>
                        <p className="serviceContent">{content}</p>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <ul id="links" className="serviceLinks">
          <li id="contactLink">
            <Link to="/about#contact" role="button" className="buttonesque">
              <span>
                <span>Contact Us</span>
              </span>
            </Link>
          </li>
        </ul>
      </MainStyles>
    </>
  );
}

export const query = graphql`
  query {
    engineering: allSanityEngineering {
      nodes {
        mainTitle
        mainContent
        id
        serviceBreakdown {
          _key
          serviceContent
          serviceTitle
          image {
            asset {
              _id
            }
            ...ImageWithPreview
          }
        }
      }
    }
  }
`;
