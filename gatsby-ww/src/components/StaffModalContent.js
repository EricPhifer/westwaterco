import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

const ContentStyles = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: black;
  background-color: var(--white);
  font-size: 1.5rem;
  overflow: scroll;
  h3 {
    font-weight: bold;
  }
  .position {
    padding-top: 0;
    margin-top: 0;
    font-size: 1rem;
  }
`;

export default function StaffModalContent() {
  const { staff } = useStaticQuery(graphql`
    query($skip: Int = 0) {
      staff: allSanityAbout(skip: $skip) {
        totalCount
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
          slug {
            current
          }
        }
      }
    }
  `);

  return (
    <ContentStyles>
      {staff.nodes.map((staffMember) => (
        <div key={staffMember.id}>
          {console.log(staffMember.id)}
          <Link to={`/staff/${staffMember.slug.current}`}>
            <SanityImage
              {...staffMember.image}
              alt={staffMember.name}
              style={{
                height: '300px',
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          </Link>
          {staffMember.description.map((description) => (
            <div className="descriptionContainer" key={description}>
              <p>{description}</p>
            </div>
          ))}
          <h3 className="name">{staffMember.name}</h3>
          <p className="position">{staffMember.position}</p>
        </div>
      ))}
    </ContentStyles>
  );
}
