import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
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
    background-color: rgba(84, 89, 95, 0.3);
    height: 100vh;
    width: 100vw;
  }
  .hero {
    display: grid;
    grid-template-areas:
      '. . . . title title title title . . . .'
      '. . . . tagline1 tagline1 tagline1 tagline1 . . . .'
      '. . . . services services services services . . . .'
      '. . . . tagline2 tagline2 tagline2 tagline2 . . . .'
      '. . . . . icon icon . . . . .';
    padding-top: 30vh;
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
      padding: 0 20vw;
    }
    .heroTagline {
      font-size: 1.65rem;
      padding: 0 2rem;
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

const MainStyles = styled.div`
  padding: 1rem;
  background: rgba(247, 249, 251, 1);
  color: rgba(83, 89, 95, 1);
  display: grid;
  grid-template-areas:
    'main main main main main main main main main main main main '
    'water water water water water water wastewater wastewater wastewater wastewater wastewater wastewater '
    'admin admin admin admin admin admin other other other other other other '
    '. . . . . link link . . . . . ';
  gap: 1rem;
  h2 {
    text-align: center;
    text-decoration: none;
    font-size: 3rem;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.5;
  }
  #main {
    grid-area: main;
  }
  .mainSection {
    padding: 0 0 2rem 0;
  }
  #water {
    grid-area: water;
  }
  #wastewater {
    grid-area: wastewater;
  }
  #admin {
    grid-area: admin;
  }
  #other {
    grid-area: other;
  }
  .serviceImage {
    border: 1px black solid;
    padding: 3rem 5rem;
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
`;

export default function EngPage({ data }) {
  // const engineering = data.engineering.nodes;
  return (
    <>
      <SEO title="Engineering Consulting" />
      <EngStyles>
        <div className="overlay">
          <div className="hero">
            <div id="title" className="heroTitle">
              Professional Engineering Consulting
            </div>
            <p id="tagline1" className="heroTagline">
              Our engineers specialize in the drinking water and domestic
              wastewater utility services.
            </p>
            <p id="serviceScroll" className="heroServices">
              Services Include: <span className="scrollList"> </span>
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
        <div id="main" className="mainSection">
          <h2 className="mainTitle">Our Engineering Consultants</h2>
          <p className="mainContent">
            Engineering services for our clients range from long-range capital
            improvements planning, design, Plans and Specifications for
            rehabilitation and/or replacement of existing system components,
            monitoring flows, loading, or usage as compared to capacity and
            reserve capacity, assistance with efficient and effective operation
            and maintenance, compliance with permits and standards and oversight
            of proposed developments.
          </p>
        </div>
        <div id="water" className="serviceSection">
          <div className="services">
            <div className="serviceImage" />
            <h2 className="serviceTitle">Water Systems</h2>
            <p className="serviceContent">
              We service source development, water storage, water treatment
              plants and distribution. <br />
              <br />
              Among these include: surface and groundwater supplies, raw water
              reservoirs, disinfection, pipe network analysis, capacity
              analysis, watershed protection, among others.
            </p>
          </div>
        </div>
        <div id="wastewater" className="serviceSection">
          <div className="services">
            <div className="serviceImage" />
            <h2 className="serviceTitle">Wastewater Systems</h2>
            <p className="serviceContent">
              Servicing collection systems, sewage lift stations, treatment
              plants and biosolids management. <br />
              <br />
              These include: inflow/infiltration assessment, preliminary
              engineering report, 201 wastewater facilities management planning,
              letter of intent and more.
            </p>
          </div>
        </div>
        <div id="admin" className="serviceSection">
          <div className="services">
            <div className="serviceImage" />
            <h2 className="serviceTitle">
              Contract Admin & Resident Inspection
            </h2>
            <p className="serviceContent">
              Under administration and inspection includes: contract documents,
              right-of-way permitting, submittals review, change orders/field
              orders, coordinations with project engineer and testing agencies.
            </p>
          </div>
        </div>
        <div id="other" className="serviceSection">
          <div className="services">
            <div className="serviceImage" />
            <h2 className="serviceTitle">Other Services</h2>
            <p className="serviceContent">
              Other services include irrigation systems, hydraulic design, flood
              studies, storm drainage and streets & roadways.
              <br />
              <br />
              These breakdown to include: on-farm systems, pump stations,
              rainfall/runoff analysis, hydrology, alignment and grade.
            </p>
          </div>
        </div>
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
