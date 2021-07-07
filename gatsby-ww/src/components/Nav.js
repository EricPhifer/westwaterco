import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bg from '../assets/images/bg.png';

const NavStyles = styled.nav`
  width: 100vh;
  position: fixed;
  margin-bottom: 3rem;
  .navContainer {
    margin: 0 2rem 0 2rem;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-areas: 'logo . . engineering . environmental . projects . about . gsa';
    font-variant: small-caps;
  }
  .navLink {
    place-self: center;
    text-align: center;
  }
  .logo {
    grid-area: logo;
    width: 9rem;
    height: 7rem;
    justify-self: center;
    align-self: center;
    text-align: center;
    background-image: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
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
  a {
    font-size: 2rem;
    text-decoration: none;
    position: relative;
    &:after {
      content: '';
      border-bottom: 2px solid black;
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
    &[aria-current='page'] {
      color: var(--red);
    }
  }

  @media (max-width: 900px) {
    .logo {
      width: 7rem;
      height: 5rem;
    }
    ul {
      gap: 0.5rem;
    }
    a {
      font-size: 1.75rem;
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
          <Link to="/about">About Us</Link>
        </div>
        <div className="navLink" id="gsa">
          <img src="#" />
          <div className="contract-num">Contract#47QRAA20D002M</div>
        </div>
      </div>
    </NavStyles>
  );
}
