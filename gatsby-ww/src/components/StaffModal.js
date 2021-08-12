/* Modal code from: https://levelup.gitconnected.com/accessible-modals-in-gatsby-using-portals-1e80e33a8a2 */

import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { ImCross } from 'react-icons/im';
import { graphql, Link, useStaticQuery } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import Portal from './Portal';

const PortalStyles = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .pagination {
    z-index: 101;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .modalContainer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    color: black;
    background-color: var(--white);
    padding: 2rem;
    height: auto;
    max-height: 90vh;
    width: auto;
    overflow: scroll;
    a {
      position: relative;
    }
  }
  button {
    background-color: transparent;
    font-size: 3rem;
    font-family: 'Times New Roman', Times, serif;
    box-shadow: none;
    float: right;
    margin-top: 5rem;
    margin-right: 5rem;
  }
`;
const ContentStyles = styled.div`
  max-width: 600px;
  margin-top: 8vh;
  margin-right: auto;
  margin-left: auto;
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
  a {
    text-decoration: none;
    color: black;
    font-family: inherit;
    &:hover {
      color: rgba(255, 0, 0, 0.4);
    }
  }
`;

const StaffModal = forwardRef((props, ref) => {
  const { staff } = useStaticQuery(graphql`
    query {
      staff: allSanityAbout {
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
  StaffModal.displayName = 'Staff Modal';
  const [display, setDisplay] = useState(false);

  const handleOpen = () => {
    setDisplay(true);
  };

  const handleClose = () => {
    setDisplay(false);
  };

  useImperativeHandle(ref, () => ({
    openStaffModal: () => handleOpen(),
    closeStaffModal: () => handleClose(),
  }));

  const staffMember = staff.nodes;
  if (display) {
    return (
      <Portal>
        <PortalStyles>
          <div className="modalBackdrop" />
          <div className="modalContainer">
            <div className="pagination">{props.children}</div>
            {staffMember.map((member) => (
              <ContentStyles
                id={member.name.toLowerCase().split(' ', 1)}
                key={member.id}
              >
                <Link to={`/staff/${member.slug.current}`}>
                  <SanityImage
                    {...member.image}
                    alt={member.name}
                    style={{
                      height: '300px',
                      objectFit: 'cover',
                      auto: 'format',
                    }}
                  />
                </Link>
                {member.description.map((description) => (
                  <div className="descriptionContainer" key={description}>
                    <p>{description}</p>
                  </div>
                ))}
                <Link to={`/staff/${member.slug.current}`}>
                  <h3 className="name">{member.name}</h3>
                </Link>
                <p className="position">{member.position}</p>
                <br />
                <br />
                <hr />
              </ContentStyles>
            ))}
          </div>
          <button type="button" onClick={handleClose}>
            <ImCross />
          </button>
        </PortalStyles>
      </Portal>
    );
  }

  return null;
});

export default StaffModal;
