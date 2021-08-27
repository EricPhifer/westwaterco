import React from 'react';
import { graphql } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const SingleProjectStyles = styled.div`
  margin: 80px auto 25px auto;
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
  img {
    height: auto;
  }
  .noImage {
    width: 100%;
    height: 400px;
    color: white;
    text-align: center;
    background-image: url(${logo});
    background-position: center top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: auto;
    background-origin: content-box;
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
    .cPlaceholder {
      height: 200px;
    }
  }
  @media only screen and (max-width: 900px) {
    max-width: 80vw;
    margin: 0 auto;
    padding: 0;
    .contentContainer {
      .image {
        margin: 75px auto 0 auto;
        max-width: 80%;
      }
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
      }
      .carousel {
        grid-template-columns: repeat(2, minmax(auto, 1fr));
      }
    }
  }
  @media only screen and (max-width: 600px) {
    max-width: 95vw;
    margin: 0 auto;
    padding: 0;
    .contentContainer {
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
      }
      .carousel {
        grid-template-columns: repeat(2, minmax(auto, 1fr));
      }
    }
  }
  @media only screen and (max-width: 400px) {
    max-width: 95vw;
    margin: 0 auto;
    padding: 0;
    .contentContainer {
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
      }
      .carousel {
        grid-template-columns: repeat(1, minmax(auto, 1fr));
      }
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
                width: '100%',
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          ) : (
            <div className="noImage" />
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
          <div className="noImageGallery" />
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
