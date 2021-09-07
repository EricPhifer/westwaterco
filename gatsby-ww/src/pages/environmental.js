import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import {
  FaRegArrowAltCircleDown,
  FaGlobeAmericas,
  FaSeedling,
  FaTree,
  FaFish,
  FaMountain,
  FaRegCompass,
  FaHardHat,
  FaWater,
  FaFeatherAlt,
  FaCrow,
} from 'react-icons/fa';
import { GiRaining } from 'react-icons/gi';
import { AiTwotoneBank } from 'react-icons/ai';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { CgFileDocument } from 'react-icons/cg';
import SEO from '../components/SEO';
import envBG from '../assets/images/envBG.jpg';

const EnvironmentalStyles = styled.div`
  text-align: center;
  padding-top: 75px;
  height: 100vh;
  width: 100vw;
  background-image: url(${envBG});
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
      '. title title .'
      '. tagline1 tagline1 .'
      '. tagline2 tagline2 .'
      '. icon icon .';
    padding-top: 80px;
    max-width: 600px;
    margin: 0 auto;
    #title {
      grid-area: title;
    }
    .heroTitle {
      font-size: 3.5rem;
      text-transform: uppercase;
      font-weight: 450;
    }
    #staffScroll {
      grid-area: staff;
    }
    .heroStaff {
      &::before {
        content: '';
        opacity: 1;
        -ms-transition: opacity staffScroll 0.5s;
        -ms-animation: staffScroll 15s ease-in-out 2s infinite;
        -webkit-transition: opacity staffScroll 0.5s;
        -webkit-animation: staffScroll 15s ease-in-out 2s infinite;
        transition: opacity staffScroll 0.5s;
        animation: staffScroll 15s ease-in-out 2s infinite;
      }
    }
    #tagline1 {
      grid-area: tagline1;
    }
    #tagline2 {
      grid-area: tagline2;
    }
    .heroTagline {
      font-size: 1.65rem;
      padding: 0 2rem;
    }
    #icon {
      grid-area: icon;
    }
    @-webkit-keyframes staffScroll {
      0% {
        -webkit-content: 'biologists';
        -webkit-opacity: 1;
      }
      10% {
        -webkit-opacity: 0;
      }
      20% {
        -webkit-ontent: 'resource specialists';
        -webkit-opacity: 1;
      }
      30% {
        -webkit-opacity: 0;
      }
      40% {
        -webkit-content: 'GIS analysts';
        -webkit-opacity: 1;
      }
      50% {
        -webkit-opacity: 0;
      }
      60% {
        -webkit-content: 'hydrologists';
        -webkit-opacity: 1;
      }
      70% {
        -webkit-opacity: 0;
      }
      80% {
        -webkit-content: 'geologists';
        -webkit-opacity: 1;
      }
      90% {
        -webkit-opacity: 0;
      }
    }
    @keyframes staffScroll {
      0% {
        content: 'biologists';
        opacity: 1;
      }
      10% {
        opacity: 0;
      }
      20% {
        content: 'resource specialists';
        opacity: 1;
      }
      30% {
        opacity: 0;
      }
      40% {
        content: 'GIS analysts';
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      60% {
        content: 'hydrologists';
        opacity: 1;
      }
      70% {
        opacity: 0;
      }
      80% {
        content: 'geologists';
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
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
      .heroTitle {
        font-size: 2.6rem;
        padding-bottom: 5vh;
      }
      .heroTagline {
        font-size: 1.5rem;
        padding: 0 0.5rem 2vh 0.5rem;
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
  background: rgba(247, 249, 251, 1);
  color: rgba(83, 89, 95, 1);
  display: grid;
  grid-template-areas:
    'main main main main main main main main main main main main '
    'container container container container container container container container container container container container '
    '. . . . . link link . . . . . ';
  h2 {
    text-align: center;
    text-decoration: none;
    font-size: 3.5rem;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.5;
  }
  #main {
    grid-area: main;
  }
  #container {
    grid-area: container;
  }
  .mainSection {
    padding: 2rem 5rem;
  }
  #links {
    grid-area: link;
  }
  .serviceContainer {
    padding: 1rem 0 2.5rem 0;
    margin: 0;
    align-self: center;
    text-align: center;
    width: 100vw;
    background-color: rgba(193, 199, 191, 1);
  }
  .serviceType {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    .threeIconServiceSection {
      margin: 2rem 0;
      display: grid;
      grid-template: subgrid;
      grid-template-areas: '. icon1 icon1 . . icon2 icon2 . . icon3 icon3 .';
      #icon1 {
        grid-area: icon1;
      }
      #icon2 {
        grid-area: icon2;
      }
      #icon3 {
        grid-area: icon3;
      }
      .iconContainer {
        width: 259px;
        justify-self: center;
      }
      .icon {
        font-size: 10rem;
      }
      h4 {
        font-size: 2rem;
      }
    }
    .twoIconServiceSection {
      margin: 2rem 0;
      display: grid;
      grid-template: subgrid;
      grid-template-areas: '. . . icon1 icon1 . . icon2 icon2 . . .';
      #icon1 {
        grid-area: icon1;
      }
      #icon2 {
        grid-area: icon2;
      }
      .iconContainer {
        width: 250px;
        justify-self: center;
      }
      .icon {
        font-size: 10rem;
      }
      h4 {
        font-size: 2rem;
      }
    }
    .oneIconServiceSection {
      margin: 2rem 0;
      display: grid;
      grid-template: subgrid;
      grid-template-areas: '. . . . . icon1 icon1 . . . . .';
      #icon1 {
        grid-area: icon1;
      }
      .iconContainer {
        width: 250px;
        justify-self: center;
      }
      .icon {
        font-size: 10rem;
        margin: 0 auto;
      }
    }
    hr {
      margin: 2rem 1.5rem;
    }
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
  /* Icon Styling */
  #HiOutlineDocumentText {
    background: rgba(52, 188, 114, 1);
    margin-left: 30%;
    margin-bottom: 5%;
    text-align: center;
    border-radius: 50%;
    height: 110px;
    width: 110px;
    font-size: 7.7rem;
    svg {
      vertical-align: middle;
    }
  }
  #AiTwotoneBank {
    margin-left: 30%;
    margin-bottom: 5%;
    border: 3px white solid;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 7rem;
    svg {
      vertical-align: middle;
    }
  }
  #GiRaining {
    margin-left: 30%;
    margin-bottom: 5%;
    border: 3px gray solid;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 7rem;
    svg {
      vertical-align: middle;
    }
  }
  #FaGlobeAmericas {
    margin-left: 30%;
    margin-bottom: 5%;
    background-color: rgba(71, 134, 163, 1);
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 7rem;
    svg {
      vertical-align: middle;
    }
  }
  #CgFileDocument {
    margin-left: 30%;
    margin-bottom: 5%;
    background-color: gray;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 7rem;
    svg {
      vertical-align: middle;
    }
  }
  #FaSeedling {
    margin-left: 30%;
    margin-bottom: 5%;
    border: 3px solid rgba(92, 206, 117, 1);
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 7rem;
    svg {
      vertical-align: middle;
    }
  }
  #FaTree {
    margin-left: 30%;
    margin-bottom: 5%;
    background-color: rgba(136, 194, 225, 1);
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 7rem;
    svg {
      vertical-align: middle;
    }
  }
  #FaFish {
    margin-left: 30%;
    margin-bottom: 5%;
    border: 3px solid rgba(97, 194, 226, 1);
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 7rem;
    svg {
      vertical-align: middle;
    }
  }
  #FaMountain {
    margin-left: 30%;
    margin-bottom: 5%;
    background-color: gray;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 6.7rem;
    svg {
      vertical-align: middle;
    }
  }
  #FaHardHat {
    margin-left: 30%;
    margin-bottom: 5%;
    border: 3px solid yellow;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 6.7rem;
    svg {
      vertical-align: middle;
    }
  }
  #FaWater {
    margin-left: 30%;
    margin-bottom: 5%;
    background-color: rgba(104, 120, 101, 1);
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 7rem;
    svg {
      vertical-align: middle;
    }
  }
  #FaRegCompass {
    margin-left: 30%;
    margin-bottom: 5%;
    background-color: rgba(145, 185, 199, 1);
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 7rem;
    svg {
      vertical-align: middle;
    }
  }
  #FaSeedlingNoxPlans {
    margin-left: 30%;
    margin-bottom: 5%;
    border: 3px solid rgba(157, 180, 130, 1);
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 7rem;
    svg {
      vertical-align: middle;
    }
  }
  #FaSeedlingNoxInv {
    margin-left: 30%;
    margin-bottom: 5%;
    background-color: rgba(149, 189, 157, 1);
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 7rem;
    svg {
      vertical-align: middle;
    }
  }
  #FaFeatherAlt {
    margin-left: 30%;
    margin-bottom: 5%;
    background-color: rgba(211, 192, 93, 1);
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 6.5rem;
    svg {
      vertical-align: middle;
    }
  }
  #FaCrow {
    margin-left: 30%;
    margin-bottom: 5%;
    background-color: rgba(92, 194, 228, 1);
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 7rem;
    svg {
      vertical-align: middle;
    }
  }
  @media only screen and (max-width: 786px) {
    .mainSection {
      padding: 2rem 0.5rem;
      .mainTitle {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
    .serviceContainer {
      .serviceType {
        .serviceTitle {
          font-size: 3rem;
        }
      }
      .threeIconServiceSection {
        grid-template-areas:
          '. icon1 icon1 .'
          '. icon2 icon2 .'
          '. icon3 icon3 .';
        row-gap: 2rem;
      }
      #FaFeatherAlt,
      #FaSeedlingNoxInv,
      #FaCrow,
      #FaRegCompass,
      #FaHardHat,
      #FaWater {
        margin-left: 33%;
      }
      .twoIconServiceSection {
        grid-template-areas:
          '. icon1 icon1 .'
          '. icon2 icon2 .';
        row-gap: 2rem;
      }
      .oneIconServiceSection {
        grid-template-areas: '. . icon1 . .';
        row-gap: 2rem;
        margin: 2rem 0;
      }
      .icon {
        .iconTitle {
          font-size: 1.7rem;
        }
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .mainSection {
      .mainTitle {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
    .serviceContainer {
      .serviceType {
        .serviceTitle {
          padding: 0 0.5rem;
          font-size: 2.5rem;
        }
        .icon {
          .iconTitle {
            font-size: 1.7rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 350px) {
    .mainSection {
      .mainTitle {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
    .serviceContainer {
      .serviceType {
        .serviceTitle {
          font-size: 2.5rem;
        }
        .icon {
          .iconTitle {
            font-size: 1.7rem;
          }
        }
      }
    }
  }
`;

export default function EnvironmentalPage({ data }) {
  const environmental = data.environmental.nodes;
  return (
    <>
      <SEO title="Environmental Consulting" />
      <EnvironmentalStyles>
        <div className="overlay">
          <div className="hero">
            <div id="title" className="heroTitle">
              Professional Environmental Consulting
            </div>
            <p id="tagline1" className="heroTagline">
              Our staff of <span className="heroStaff"> </span>
              allow us to carry projects through from conceptual design to
              project completion and monitoring.
            </p>
            <p id="tagline2" className="heroTagline">
              Team members have over 40 years experience in Western Colorado.
            </p>
            <div id="icon" className="iconContainer">
              <div className="heroIcon">
                <FaRegArrowAltCircleDown />
              </div>
            </div>
          </div>{' '}
        </div>
      </EnvironmentalStyles>
      <MainStyles>
        {environmental.map((env) => (
          <div key={env.id} id="main" className="mainSection">
            <h2 className="mainTitle">{env.title}</h2>
            {env.contents.map((content) => (
              <span key={content}>
                <p className="mainContent">{content}</p>
              </span>
            ))}
          </div>
        ))}
        <div id="container" className="serviceContainer">
          <div className="serviceType">
            <h2 className="serviceTitle">Biological Surveys</h2>
            <div className="threeIconServiceSection">
              <div id="icon1" className="iconContainer">
                <div className="icon">
                  <div id="FaFeatherAlt">
                    <FaFeatherAlt color="white" />
                  </div>
                </div>
                <h4 className="iconTitle">Migratory Bird & Raptor</h4>
              </div>
              <div id="icon2" className="iconContainer">
                <div className="icon">
                  <div id="FaSeedlingNoxInv">
                    <FaSeedling color="white" />
                  </div>
                </div>
                <h4 className="iconTitle">Noxious Weed Inventories</h4>
              </div>
              <div id="icon3" className="iconContainer">
                <div className="icon">
                  <div id="FaCrow">
                    <FaCrow color="white" />
                  </div>
                </div>
                <h4 className="iconTitle">
                  Threatened, Endangered, and Sensitive Species
                </h4>
              </div>
            </div>
            <hr />
          </div>
          <div className="serviceType">
            <h2 className="serviceTitle">Noxious Weed Management Plans</h2>
            <div className="oneIconServiceSection">
              <div id="icon1" className="iconContainer">
                <div className="icon">
                  <div id="FaSeedlingNoxPlans">
                    <FaSeedling color="rgba(157, 180, 130, 1)" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="serviceType">
            <h2 className="serviceTitle">
              Army Corps of Engineers 404 Permitting
            </h2>
            <div className="threeIconServiceSection">
              <div id="icon1" className="iconContainer">
                <div className="icon">
                  <div id="FaRegCompass">
                    <FaRegCompass color="white" />
                  </div>
                </div>
                <h4 className="iconTitle">Wetland Delineations</h4>
              </div>
              <div id="icon2" className="iconContainer">
                <div className="icon">
                  <div id="FaHardHat">
                    <FaHardHat color="yellow" />
                  </div>
                </div>
                <h4 className="iconTitle">Pre-Construction Notification</h4>
              </div>
              <div id="icon3" className="iconContainer">
                <div className="icon">
                  <div id="FaWater">
                    <FaWater color="rgba(136, 194, 225, 1)" />
                  </div>
                </div>
                <h4 className="iconTitle">
                  Mitigation Wetland Planning & Monitoring
                </h4>
              </div>
            </div>
            <hr />
          </div>
          <div className="serviceType">
            <h2 className="serviceTitle">
              Habitat Conservation Plan Development
            </h2>
            <div className="oneIconServiceSection">
              <div id="icon1" className="iconContainer">
                <div className="icon">
                  <div id="FaMountain">
                    <FaMountain color="white" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="serviceType">
            <h2 className="serviceTitle">Aquatic Habitat Assessment</h2>
            <div className="oneIconServiceSection">
              <div id="icon1" className="iconContainer">
                <div className="icon">
                  <div id="FaFish">
                    <FaFish color="rgba(97, 194, 226, 1)" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="serviceType">
            <h2 className="serviceTitle">Fuels Inventory Analysis</h2>
            <div className="oneIconServiceSection">
              <div id="icon1" className="iconContainer">
                <div className="icon">
                  <div id="FaTree">
                    <FaTree color="rgba(18, 164, 89, 1)" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="serviceType">
            <h2 className="serviceTitle">
              Reclamation & Revegetation Planning and Monitoring
            </h2>
            <div className="oneIconServiceSection">
              <div id="icon1" className="iconContainer">
                <div className="icon">
                  <div id="FaSeedling">
                    <FaSeedling color="rgba(92, 206, 117, 1)" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="serviceType">
            <h2 className="serviceTitle">
              NEPA Documentation (EA/EIS) & Regulatory Guidance
            </h2>
            <div className="oneIconServiceSection">
              <div id="icon1" className="iconContainer">
                <div className="icon">
                  <div id="CgFileDocument">
                    <CgFileDocument color="white" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="serviceType">
            <h2 className="serviceTitle">
              Endangered Species Act (ESA) Sec. 7 Consultation
            </h2>
            <div className="oneIconServiceSection">
              <div id="icon1" className="iconContainer">
                <div className="icon">
                  <div id="HiOutlineDocumentText">
                    <HiOutlineDocumentText color="white" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="serviceType">
            <h2 className="serviceTitle">Stormwater Management</h2>
            <div className="twoIconServiceSection">
              <div id="icon1" className="iconContainer">
                <div className="icon">
                  <div id="GiRaining">
                    <GiRaining color="gray" />
                  </div>
                </div>
                <h4 className="iconTitle">
                  Stormwater Management Plan Preparation
                </h4>
              </div>
              <div id="icon2" className="iconContainer">
                <div className="icon">
                  <div id="AiTwotoneBank">
                    <AiTwotoneBank color="white" />
                  </div>
                </div>
                <h4 className="iconTitle">Site Inspections</h4>
              </div>
            </div>
            <hr />
          </div>
          <div className="serviceType">
            <h2 className="serviceTitle">GIS Data Management and Mapping</h2>
            <div className="oneIconServiceSection">
              <div id="icon1" className="iconContainer">
                <div className="icon">
                  <div id="FaGlobeAmericas">
                    <FaGlobeAmericas color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="links" className="serviceLinks">
            <div id="contactLink">
              <Link to="/about#contact" role="button" className="buttonesque">
                <span>
                  <span>Contact Us</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </MainStyles>
    </>
  );
}

export const query = graphql`
  query {
    environmental: allSanityEnvironmental {
      nodes {
        id
        title
        contents
      }
    }
  }
`;
