import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  width: 100%;
  height: 7vh;
  display: grid;
  grid-template-areas: '. aaron . amie . dean . stephen . leah . jeremy .';
  align-content: center;
  place-items: center;
  margin: auto;
  text-align: center;
  #Aaron {
    grid-area: aaron;
  }
  #Amie {
    grid-area: amie;
  }
  #Dean {
    grid-area: dean;
  }
  #Stephen {
    grid-area: stephen;
  }
  #Leah {
    grid-area: leah;
  }
  #Jeremy {
    grid-area: jeremy;
  }
  .name {
    font-size: 1.2rem;
  }
  .position {
    font-size: 0.8rem;
  }
  a {
    color: var(--white);
    max-width: 64px;
    text-align: right;
  }
  & > * {
    border-right: 1px solid var(--white);
    text-decoration: none;
    padding-right: 1rem;
    &:hover {
      color: rgb(253, 159, 0);
      text-shadow: 0 0 3px var(--white);
    }
    &[aria-current],
    &.current {
      color: var(--red);
    }
  }
  @media (max-width: 800px) {
    font-size: 1.4rem;
  }
`;

export default function Pagination() {
  const { staff } = useStaticQuery(graphql`
    query {
      staff: allSanityAbout {
        totalCount
        nodes {
          id
          name
          position
          slug {
            current
          }
        }
      }
    }
  `);
  const staffMember = staff.nodes;
  return (
    <PaginationStyles>
      {staffMember.map((member) => (
        <Link
          title="Member Name"
          key={member.id}
          to={`#${member.name.toLowerCase().split(' ', 1)}`}
          id={member.name.split(' ', 1)}
        >
          <span className="name">{member.name.split(' ', 1)}</span>
          <div className="position">{member.position.split(' / ', 1)}</div>
        </Link>
      ))}
    </PaginationStyles>
  );
}
