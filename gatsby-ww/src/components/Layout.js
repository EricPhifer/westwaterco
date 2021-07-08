import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import 'normalize.css';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import homeBG from '../assets/images/homeBG.jpg';

const SiteBorderStyles = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background-image: url(${homeBG});
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  h2 {
    text-decoration: underline;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
