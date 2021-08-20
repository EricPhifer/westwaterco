import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const TermStyles = styled.div`
  max-width: 750px;
  margin: 80px auto 2rem auto;
  padding-left: 5rem;
  padding-right: 5rem;
  color: black;
  word-wrap: break-word;
  h1,
  h2 {
    text-align: center;
  }
  a {
    color: black;
  }
  p {
    font-size: 1.2rem;
  }
  .updateDate {
    text-align: center;
  }
  @media (max-width: 600px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .call {
    display: none;
  }
  @media (pointer: coarse) {
    .call {
      display: block;
    }
  }
`;

function countOrder(terms) {
  const counts = terms.map((term) => term);
  const sortedOrder = Object.values(counts).sort((a, b) => a.order - b.order);
  return sortedOrder;
}

export default function TermsConditions({ data }) {
  const terms = data.terms.nodes;
  const order = countOrder(terms);
  return (
    <>
      <SEO title="Terms &amp; Conditions" />
      <TermStyles>
        <h1>Terms and Conditions</h1>
        <p className="updateDate">Last updated: August 20, 2021</p>
        {order.map((term) => (
          <div key={term.id}>
            <br />
            <h2>{term.title}</h2>
            <div>
              {term.contents.map((content) => (
                <div>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div>
          <div>Westwater Engineering</div>
          <div>2516 E Foresight Cir #1</div>
          <div>Grand Junction, CO 81505 United States</div>
          <div className="call">
            <a href="tel:970-241-7076">Contact Us by Phone</a>
          </div>
          <div>
            <Link to="/about#about-us">Contact Us by Email</Link>
          </div>
        </div>
      </TermStyles>
    </>
  );
}

export const query = graphql`
  query {
    terms: allSanityTermsconditions {
      nodes {
        contents
        id
        order
        title
      }
    }
  }
`;
