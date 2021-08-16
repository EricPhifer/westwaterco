import React from 'react';
import { graphql } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

const SingleProjectStyles = styled.div`
  margin: 150px auto 25px auto;
  max-width: 60vw;
  color: black;
  background-color: var(--white);
  h2 {
    margin: 3.5rem 0;
    font-size: 3rem;
    text-align: center;
    text-decoration: none;
  }
  p {
    font-size: 1.5rem;
  }
  .noImage {
    width: 100%;
    height: 400px;
    color: white;
    text-align: center;
    background-image: linear-gradient(darkgray, gray, lightgray);
  }
  .noImageGallery {
    width: 100%;
    height: 200px;
    text-align: center;
  }
  .carousel {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    gap: 2rem;
    margin-left: auto;
    margin-right: auto;
    overflow-y: scroll;
    .cPlaceholder {
      height: 200px;
    }
  }
`;

export default function SingleProjectsPage({ data }) {
  const { projects } = data;
  return (
    <SingleProjectStyles>
      <div className="contentContainer">
        <div className="image">
          {projects.image ? (
            <SanityImage
              {...projects.image}
              alt={projects.mainTitle}
              style={{
                height: '400px',
                width: '100%',
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          ) : (
            <div className="noImage">No image available.</div>
          )}
        </div>
        <h2>{projects.mainTitle}</h2>
        {projects.mainContent.map((content) => (
          <span key={content}>
            <p className="mainContent">{content}</p>
          </span>
        ))}
        {projects.gallery ? (
          <div className="carousel">
            {projects.gallery.images.map((image) => (
              <span>
                <SanityImage
                  {...image}
                  className="cPlaceholder"
                  alt="Gallery Image"
                  key={image._id}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </span>
            ))}
          </div>
        ) : (
          <div className="noImageGallery">No gallery images available.</div>
        )}
      </div>
    </SingleProjectStyles>
  );
}

export const query = graphql`
  query($slug: String) {
    projects: sanityProjects(slug: { current: { eq: $slug } }) {
      id
      mainTitle
      mainContent
      image {
        ...ImageWithPreview
      }
      slug {
        current
      }
      gallery {
        images {
          ...ImageWithPreview
        }
      }
    }
  }
`;
