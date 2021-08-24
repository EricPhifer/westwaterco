import React from 'react';
import styled from 'styled-components';

const TempStyles = styled.div`
  margin-top: 100px;
  .menu-wrapper {
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-areas: 'one . menu . two';
    #imgOne {
      text-align: center;
      grid-area: one;
      place-self: center;
    }
    #imgTwo {
      text-align: center;
      grid-area: two;
      place-self: center;
    }
    #mobileMenu {
      grid-area: menu;
    }
  }
  .header {
    position: relative;
    width: 100%;
    z-index: 3;
    text-align: center;
  }

  .header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }
  .header li a {
    display: block;
    color: #414141;
    padding: 20px 20px;
    text-decoration: none;
  }

  .header li a:hover,
  .header .menu-btn:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .header .logo {
    color: #fff;
    display: block;
    float: left;
    font-size: 1.5em;
    padding: 12px 20px;
    text-decoration: none;
  }
  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  /* menu icon */

  .header .menu-icon {
    cursor: pointer;
    display: inline-block;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  .header .menu-icon .navicon {
    background: #fff;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #fff;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .header .menu-icon .navicon:before {
    top: 5px;
  }

  .header .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */

  .header .menu-btn {
    display: none;
  }

  .header .menu-btn:checked ~ .menu {
    max-height: 340px;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
  /* Responsive */
  @media only screen and (max-width: 768px) {
    .header ul {
      background-color: #fff;
    }
    .header li a {
      padding: 15px;
      border-bottom: 1px dotted #ddd;
    }
  }

  @media only screen and (min-width: 768px) {
    .menu-wrapper {
      background: #414141;
      height: 55px;
      line-height: 55px;
      width: 100%;
    }
    .header .logo {
      line-height: 1;
    }
    .header li a {
      color: #fff;
      padding: 0px 30px;
      border-right: 1px solid rgba(255, 255, 255, 0.2);
    }
    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  }
`;

export default function TempPage() {
  return (
    <TempStyles>
      {' '}
      <div className="menu-wrapper">
        <div id="imgOne">Img</div>
        <header className="header" id="mobileMenu">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon" />
          </label>
          <ul className="menu">
            <li>
              <a href="#about">Engineering</a>
            </li>
            <li>
              <a href="#contact">Environmental</a>
            </li>
            <li>
              <a href="#careers">Projects</a>
            </li>
            <li>
              <a href="#contact">About</a>
            </li>
          </ul>
        </header>
        <div id="imgTwo">Img</div>
      </div>
    </TempStyles>
  );
}
