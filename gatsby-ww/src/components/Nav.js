import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bg from '../assets/images/bg.png';
import gsa from '../assets/images/gsa.jpg';

const NavStyles = styled.nav`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100vw;
  padding: 0.75rem 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  .navContainer {
    margin: 0 2rem 0 2rem;
    list-style: none;
    display: grid;
    gap: 1rem;
    grid-template-areas: 'logo . . . engineering environmental projects about . . . gsa';
  }
  .navLink {
    place-self: start right;
    margin-top: 0.75rem;
    &:hover {
      transform: translateY(8px);
    }
    transition: transform 0.4s ease-in-out;
    a {
      margin-top: 2rem;
      font-size: 1.55rem;
      text-decoration: none;
      position: relative;
      &[aria-current='page'] {
        color: var(--blue);
      }
    }
  }
  .logo {
    grid-area: logo;
    width: 15rem;
    height: 7rem;
    justify-self: center;
    align-self: center;
    text-align: center;
    background-image: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .gsaContainer {
    place-self: start right;
  }
  .gsa {
    width: 15rem;
    height: 3.95rem;
    background-image: url(${gsa});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .contract-num {
    font-size: 1rem;
    font-weight: bold;
    text-align: right;
    font-variant: small-caps;
  }
  #engineering {
    grid-area: engineering;
  }
  #environmental {
    grid-area: environmental;
  }
  #projects {
    grid-area: projects;
  }
  #about {
    grid-area: about;
  }
  #gsa {
    grid-area: gsa;
  }

  @media (max-width: 900px) {
    ul {
      gap: 0.5rem;
    }
    a {
      font-size: 1.75rem;
    }
  }
  @media (max-width: 768px) {
    .navLink {
      a {
        font-size: 1.35rem;
      }
    }
  }
  @media (max-width: 400px) {
    .logo {
      width: 7rem;
      height: 5rem;
    }
    ul {
      gap: 0;
      line-height: 0.9;
    }
    a {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 374px) and (min-width: 320px) {
    ul {
      gap: 0;
      line-height: 0.7;
    }
    a {
      font-size: 1.2rem;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <div className="navContainer">
        <div>
          <Link to="/">
            <div className="logo" />
          </Link>
        </div>
        <div className="navLink" id="engineering">
          <Link to="/engineering">Engineering</Link>
        </div>
        <div className="navLink" id="environmental">
          <Link to="/environmental">Environmental</Link>
        </div>
        <div className="navLink" id="projects">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="navLink" id="about">
          <Link to="/about#about-us">About Us</Link>
        </div>
        <div className="gsaContainer" id="gsa">
          <div className="gsa" />
          <div className="contract-num">Contract#47QRAA20D002M</div>
        </div>
      </div>
    </NavStyles>
  );
}
