import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  position: relative;
  margin: 0;
  width: 100vw;
  padding: 0.5rem 0 0.5rem 0;
  line-height: 1.35;
  --columns: 1;
  background-color: rgba(200, 224, 247, 1);
  min-height: 5vh;
  ul {
    padding: 0;
    display: grid;
    grid-template-areas:
      '. copyright copyright .'
      '. dev dev .'
      '. priv priv .';
    text-align: center;
    font-size: 1.4rem;
    color: gray;
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
