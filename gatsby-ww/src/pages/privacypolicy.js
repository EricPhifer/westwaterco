import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const PolicyStyles = styled.div`
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
`;

function countOrder(policies) {
  const counts = policies.map((policy) => policy);
  const sortedOrder = Object.values(counts).sort((a, b) => a.order - b.order);
  return sortedOrder;
}

export default function PrivacyPolicy({ data }) {
  const policies = data.policies.nodes;
  const order = countOrder(policies);
  return (
    <>
      <SEO title="Privacy Policy" />
      <PolicyStyles>
        <h1>Privacy Policy</h1>
        <p className="updateDate">Last updated: August 20, 2021</p>
        {order.map((policy) => (
          <div key={policy._id}>
            <br />
            <h2>{policy.title}</h2>
            <div>
              {policy.contents.map((content) => (
                <div>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </PolicyStyles>
    </>
  );
}

export const query = graphql`
  query {
    policies: allSanityPrivacypolicy {
      nodes {
        id
        order
        title
        contents
      }
    }
  }
`;
