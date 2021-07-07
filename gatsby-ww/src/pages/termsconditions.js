import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const TermStyles = styled.div`
  word-wrap: break-word;
  padding-left: 5rem;
  padding-right: 5rem;
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
        <p className="updateDate">Last updated: April 30, 2021</p>
        {order.map((term) => (
          <div key={term.id}>
            <br />
            <h1>{term.title}</h1>
            <br />
            <div>
              {term.contents.map((content) => (
                <div>
                  <div>{content}</div>
                  <br />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div>
          <div>Eric Phifer LLC</div>
          <div>Grand Junction, CO 81501 United States</div>
          <div className="call">
            <a href="tel:555-555-5555">Contact Us by Phone</a>
          </div>
          <div>
            <Link to="/#contactus">Contact Us by Email</Link>
          </div>
        </div>
      </TermStyles>
    </>
  );
}

export const query = graphql`
  query {
    terms: allSanityTermsConditions {
      nodes {
        contents
        id
        order
        title
      }
    }
  }
`;
