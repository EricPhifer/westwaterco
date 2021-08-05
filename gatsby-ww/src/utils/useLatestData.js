import { useState, useEffect } from 'react';

const gql = String.raw;

const deets = `
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

export default function useLatestData() {
  // staffMembers
  const [staffMembers, setStaffMembers] = useState();
  // Use a side effect to fetch he data from the graphql endpoint
  useEffect(function () {
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // set the data to state
        setStaffMembers(res.data.staffMember);
      })
      .catch((err) => {
        console.log('SHOOOOOT');
        console.log(err);
      });
  }, []);
  return {
    staffMembers,
  };
}
