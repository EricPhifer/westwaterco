import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const StaffCarouselStyles = styled.div`
  border: 1px black solid;
`;

export default function StaffCarousel() {
  // get a list of all staff images
  const { about } = useStaticQuery(graphql`
    query {
      about: allSanityAbout {
        nodes {
          id
          name
          position
          description
          image {
            asset {
              id
            }
            ...ImageWithPreview
          }
        }
      }
    }
  `);

  const { image } = about.nodes;
  const staffImages = image.map((images) => images);
  console.log(staffImages);
  return (
    <StaffCarouselStyles>
      <Carousel images={staffImages} />
    </StaffCarouselStyles>
  );
}
