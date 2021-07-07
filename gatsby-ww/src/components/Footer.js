import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  --columns: 1;
  ul {
    display: grid;
    grid-template-areas:
      '. . . . . copyright copyright . . . . .'
      '. . . . . dev dev . . . . .'
      '. . . . . priv priv . . . . .';
    text-align: center;
    font-size: 1.4rem;
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: gray;
    &:hover {
      color: tomato;
    }
  }
  #copyright {
    grid-area: copyright;
  }
  #developer {
    grid-area: dev;
  }
  #privacy {
    grid-area: priv;
  }
  @media (max-width: 400px) {
    ul {
      font-size: 1rem;
      margin: 0;
      margin-top: 2rem;
      margin-left: -3rem;
    }
  }
`;

export default function Footer() {
  return (
    <footer>
      <FooterStyles>
        <ul>
          <li id="copyright">
            &copy; WestWater Engineering {new Date().getFullYear()}
          </li>
          <li id="developer">
            <a href="https://ericphifer.com" target="_blank" rel="noreferrer">
              Designed &amp; Developed by Eric Phifer LLC
            </a>
          </li>
          <li id="privacy">
            <div />
            <Link to="/privacypolicy">Privacy Policy</Link> |{' '}
            <Link to="/termsconditions">Terms &amp; Conditions</Link>
          </li>
        </ul>
      </FooterStyles>
    </footer>
  );
}
