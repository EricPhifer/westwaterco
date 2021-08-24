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
  #logo {
    grid-area: logo;
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
  .contractNum {
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
  /* setting the hamburger to not display by default */
  .mobileHamburger {
    width: 100%;
    display: none;
    position: relative;
    text-align: center;
    list-style: none;
    overflow: hidden;
    ul {
      width: 100%;
      max-height: 0;
      margin: 7px 0 0 0;
      padding: 0;
      background-color: rgba(0, 0, 0, 0.6);
      clear: both;
      transition: max-height 0.2s ease-out;
      li a {
        border-bottom: 1px dotted #ddd;

        text-decoration: none;
        display: block;
        color: #fff;
        text-decoration: none;
      }
    }

    li a:hover,
    .menuBtn:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    /* menu icon */
    .menuIcon {
      display: inline-block;
      padding: 28px 20px;
      position: relative;
      cursor: pointer;
      user-select: none;
    }
    .menuIcon .navicon {
      height: 2px;
      width: 18px;
      display: block;
      position: relative;
      background: #fff;
      transition: background 0.2s ease-out;
    }
    .menuIcon .navicon:before,
    .menuIcon .navicon:after {
      height: 100%;
      width: 100%;
      display: block;
      position: absolute;
      background: #fff;
      content: '';
      transition: all 0.2s ease-out;
    }
    .menuIcon .navicon:before {
      top: 5px;
    }
    .menuIcon .navicon:after {
      top: -5px;
    }

    /* menu btn */
    .menuBtn {
      display: none;
    }
    .menuBtn:checked ~ .menu {
      max-height: 340px;
    }
    .menuBtn:checked ~ .menuIcon .navicon {
      background: transparent;
    }
    .menuBtn:checked ~ .menuIcon .navicon:before {
      transform: rotate(-45deg);
    }
    .menuBtn:checked ~ .menuIcon .navicon:after {
      transform: rotate(45deg);
    }
    .menuBtn:checked ~ .menuIcon:not(.steps) .navicon:before,
    .menuBtn:checked ~ .menuIcon:not(.steps) .navicon:after {
      top: 0;
    }

    /* Responsive */
    @media only screen and (min-width: 768px) {
      .mobileHamburger {
        background: rgba(0, 0, 0, 0.6);
        height: 55px;
        line-height: 55px;
        width: 100%;
      }
      li a {
        color: #fff;
        padding: 0px 30px;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
      }
      .menu {
        max-height: none;
      }
      .menuIcon {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    ul {
      gap: 0.5rem;
    }
    a {
      font-size: 1.75rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .navContainer {
      margin: 0 0.5rem;
      padding: 0;
      gap: 0;
      grid-template-areas: 'logo burger gsa';
    }
    .mobileHamburger {
      display: block;
      text-align: center;
      #burger {
        grid-area: burger;
      }
      ul li a {
        padding: 15px;
      }
    }
    .navLink {
      display: none;
    }
    .logo {
      width: 9.8rem;
      height: 5rem;
    }
    .gsaContainer {
      .gsa {
        width: 9.8rem;
        text-align: right;
      }
      .contractNum {
        font-size: 0.6rem;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .navContainer {
      margin: 0 0.5rem;
      padding: 0;
      gap: 0;
      grid-template-areas: 'logo burger gsa';
    }
    /* displaying hamburger for screens 400px wide & smaller */
    .mobileHamburger {
      display: block;
      text-align: center;
      #burger {
        grid-area: burger;
      }
      ul li a {
        padding: 15px;
      }
    }
    .gsaContainer {
      margin: 0;
    }
    .logo {
      width: 9.8rem;
      height: 5rem;
      margin: 0;
    }
    ul {
      gap: 0;
      line-height: 0.9;
    }
    a {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 349px) {
    ul {
      gap: 0;
      li a {
        padding: 10px;
        font-size: 0.95rem;
        word-break: break-all;
      }
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <div className="navContainer">
        <div id="logo">
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
        <div className="mobileHamburger" id="burger">
          <input className="menuBtn" type="checkbox" id="menuBtn" />
          <label className="menuIcon" htmlFor="menuBtn">
            <span className="navicon" />
          </label>
          <ul className="menu">
            <li className="mobileNavLink" id="engineering">
              <Link to="/engineering">Engineering</Link>
            </li>
            <li className="mobileNavLink" id="environmental">
              <Link to="/environmental">Environmental</Link>
            </li>
            <li className="mobileNavLink" id="projects">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="mobileNavLink" id="about">
              <Link to="/about#about-us">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="gsaContainer" id="gsa">
          <div className="gsa" />
          <div className="contractNum">Contract#47QRAA20D002M</div>
        </div>
      </div>
    </NavStyles>
  );
}
