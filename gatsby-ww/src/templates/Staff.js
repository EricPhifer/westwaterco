import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SanityImage from 'gatsby-plugin-sanity-image';

const SingleStaffStyles = styled.div`
  max-width: 600px;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: black;
  background-color: rgba(247, 249, 251, 1);
  font-size: 1.5rem;
  h3 {
    font-weight: bold;
  }
  .position {
    padding-top: 0;
    margin-top: 0;
    font-size: 1rem;
  }
  @media only screen and (max-width: 570px) {
  }
  @media only screen and (max-width: 400px) {
    p {
      margin: 1rem;
      font-size: 1.2rem;
    }
  }
`;

export default function SingleStaffPage({ data }) {
  const { about } = data;
  return (
    <SingleStaffStyles>
      <SanityImage
        {...about.image}
        alt={about.name}
        style={{
          height: '300px',
          objectFit: 'cover',
          auto: 'format',
        }}
      />
      {about.description.map((description) => (
        <div className="descriptionContainer" key={description}>
          <p>{description}</p>
        </div>
      ))}
      <h3 className="name">{about.name}</h3>
      <p className="position">{about.position}</p>
    </SingleStaffStyles>
  );
}

export const query = graphql`
  query($slug: String) {
    about: sanityAbout(slug: { current: { eq: $slug } }) {
      name
      id
      position
      description
      image {
        asset {
          assetId
        }
        ...ImageWithPreview
      }
      slug {
        current
      }
    }
  }
`;
