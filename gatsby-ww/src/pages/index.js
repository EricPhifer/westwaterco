import { graphql, Link } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const HomeStyles = styled.div`
  .heroBG {
    margin: 0;
    padding: 0;
    h1 {
      text-align: center;
      font-size: 4rem;
      text-shadow: 1px 1px 15px whitesmoke;
      font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS',
        sans-serif;
    }
    img {
      padding: 2rem 25% 2rem 25%;
    }
  }
  .homeContent {
    padding: 1rem;
    border-left: 10px black groove;
    border-bottom: 2px black groove;
    margin: 3rem;
    h3 {
      text-align: left;
      padding-bottom: 0.5rem;
      padding-left: 1rem;
      text-decoration: underline;
    }
    div {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    button {
      margin-left: 4rem;
      margin-top: 1rem;
    }
    a {
      text-decoration: none;
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

export default function HomePage({ data }) {
  const homepage = data.home.nodes;
  return (
    <>
      <SEO title="Home Page" />
      {homepage.map((home) => (
        <HomeStyles key={home.id}>
          <div className="heroBG">
            <h1>{home.welcome}</h1>
            <SanityImage
              {...home.image}
              alt="Welcome Page Image"
              height={500}
              style={{
                width: '50%',
                height: '50%',
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          </div>
          {home.contents.map((info) => (
            <div className="homeContent">
              <h3>{info.heading}</h3>
              <div>{info.content}</div>
              <button type="button">
                <Link to={info.contentURL}>Check it out here</Link>
              </button>
            </div>
          ))}
        </HomeStyles>
      ))}
    </>
  );
}

export const query = graphql`
  query {
    home: allSanityHome {
      nodes {
        id
        contents {
          content
          contentURL
          heading
        }
        image {
          asset {
            id
          }
          ...ImageWithPreview
        }
        welcome
      }
    }
  }
`;
