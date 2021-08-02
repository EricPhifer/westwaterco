import React, { useRef } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa';
import SanityImage from 'gatsby-plugin-sanity-image';
import SEO from '../components/SEO';
import aboutBG from '../assets/images/aboutBG.jpg';
import siteBG from '../assets/images/siteBG.jpg';
import useForm from '../utils/useForm';
import useContact from '../utils/useContact';
import StaffModal from '../components/StaffModal';
import StaffCarousel from '../components/StaffCarousel';

const ContactStyles = styled.div`
  text-align: center;
  padding-top: 75px;
  height: 100vh;
  width: 100vw;
  background-image: url(${aboutBG});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  .overlay {
    background-color: rgba(84, 89, 95, 0.3);
    height: 100vh;
    width: 100vw;
  }
  .gridContainer {
    margin: 0;
    padding-top: 20%;
    display: grid;
    grid-template-areas:
      '. . legend legend legend legend legend legend legend legend . .'
      '. . form form form form form form form form . .'
      '. . number number number number number number number number . .'
      '. . icon icon icon icon icon icon icon icon . .';
    place-content: space-evenly;
    align-items: center;
    #legend {
      grid-area: legend;
    }
    .header {
      place-self: center;
      text-align: center;
      font-size: 3.7rem;
      text-transform: uppercase;
      text-shadow: 2px 2px 10px black;
    }
    #formContainer {
      grid-area: form;
    }
    form {
      display: grid;
      grid-template-columns: subgrid;
      grid-template-rows: subgrid;
      place-content: space-evenly;
      align-items: center;
      padding: 1.5rem 0;
      gap: 0;
    }
    .container {
      grid-column: 1 / span 8;
      border: none;
      display: grid;
      grid-template-columns: subgrid;
      grid-template-rows: auto;
      align-items: center;
      gap: 1rem;
      input {
        height: 30px;
      }
      input,
      textarea {
        font-size: 1.4rem;
        width: 100%;
        color: gray;
      }
      label {
        display: none;
      }
      #nameContainer {
        grid-column: 1 / span 4;
      }
      #phoneContainer {
        grid-column: 5 / span 4;
      }
      #emailContainer {
        grid-column: 1 / span 8;
      }
      #messageContainer {
        grid-column: 1 / span 8;
      }
      #recaptchaContainer {
        grid-column: 1 / span 8;
      }
      #submitContainer {
        grid-column: 1 / span 8;
        margin-left: 1rem;
      }
    }
    #numberContact {
      grid-area: number;
      place-self: center;
    }
    .numberContact {
      color: white;
      text-decoration: none;
      text-align: center;
      text-shadow: 2px 2px 10px black;
      font-size: 1.5rem;
    }
    button {
      width: 100%;
      font-size: 1.4rem;
      box-shadow: none;
      background-color: rgba(71, 134, 163, 1);
      span {
        vertical-align: middle;
      }
      &:hover {
        background-color: white;
        color: gray;
      }
    }
    #icon {
      grid-area: icon;
    }
    @keyframes bounce {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(5px);
      }
    }
    .heroIcon {
      font-size: 5rem;
      animation: bounce 0.7s ease-in-out infinite alternate;
    }
  }
  @media (max-width: 400px) {
    .heroBG {
      h1 {
        font-size: 2.22rem;
      }
    }
    .homeContent {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 401px) and (max-width: 600px) {
    .heroBG {
      h1 {
        font-size: 2.6rem;
      }
    }
  }
`;

const StaffStyles = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(247, 249, 251, 1);
  button {
    padding: 0;
  }
  h2 {
    color: rgba(83, 89, 95, 1);
    font-size: 3.5rem;
    text-align: center;
    text-decoration: none;
  }
  .sectionTitle {
    width: 100%;
  }
  .grid {
    margin: 2.5rem 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    gap: 2rem 5rem;
    justify-content: space-evenly;
    justify-items: center;
    text-align: center;
    .imgContainer {
      position: relative;
      width: 250px;
      height: 300px;
      margin-bottom: 10%;
      &:hover .hoverOverlay {
        opacity: 0.5;
      }
    }
    .hoverOverlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: all 0.5s ease-in-out;
      background-color: white;
      cursor: pointer;
    }
    .image {
      width: 100%;
      height: 300px;
    }
    h4 {
      color: black;
      font-size: 2rem;
    }
    p {
      padding-top: 0;
      margin-top: 0;
      color: black;
      font-size: 1.2rem;
    }
  }
`;

const MapStyles = styled.div`
  width: 100vw;
  background-image: url(${siteBG});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-evenly;
  justify-items: center;
  h2 {
    color: white;
    font-size: 3.5rem;
    text-align: center;
    text-decoration: none;
    text-shadow: 2px 2px 10px black;
  }
  .gmap {
    width: 80%;
    height: 600px;
    margin: 3.5rem;
    border: 0;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export default function About({ data }) {
  // set graphql to start at nodes for mapping
  const about = data.about.nodes;
  // set modal reference
  const modalRef = useRef();
  // set form values on submission
  const { values, updateValue } = useForm({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  });
  if (errMessage) {
    return <p>{errMessage}</p>;
  }
  return (
    <>
      <SEO title="Contact Us / About Us" />
      <ContactStyles id="contact">
        <div className="overlay">
          <div className="gridContainer">
            <h1 id="legend" className="header">
              Contact Us
            </h1>
            <form
              id="formContainer"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <fieldset id="container" className="container">
                <div id="nameContainer" className="name">
                  <label htmlFor="name" className="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={updateValue}
                    placeholder="Name"
                    required
                  />
                </div>
                <div id="phoneContainer" className="phone">
                  <label htmlFor="phone" className="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={updateValue}
                    placeholder="Phone"
                    required
                  />
                </div>
                <div id="emailContainer" className="email">
                  <label htmlFor="email" className="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={updateValue}
                    placeholder="Email"
                    required
                  />
                </div>
                <div id="messageContainer" className="messageContainer">
                  <label htmlFor="message" className="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={values.message}
                    onChange={updateValue}
                    rows="7"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div className="recaptchaContainer">
                  <div
                    className="g-recaptcha recaptcha"
                    data-sitekey="6LeWwdoUAAAAAC9TSN9emL7w5knTBCgcNX-1ok7L"
                  />
                </div>
                <div id="submitContainer" className="submitBtn">
                  <button type="submit">
                    Send{' '}
                    <span>
                      <FaRegArrowAltCircleRight />
                    </span>
                  </button>
                </div>
              </fieldset>
            </form>
            <div id="numberContact" className="numberContact">
              <p>970-241-7076 | Fax: 970-241-7097</p>
            </div>
            <div id="icon" className="iconContainer">
              <div className="heroIcon">
                <FaRegArrowAltCircleDown />
              </div>
            </div>
          </div>
        </div>
      </ContactStyles>
      <StaffStyles>
        <h2 id="about-us" className="sectionTitle">
          Meet Our Staff
        </h2>
        <div className="grid">
          {about.map((staff) => (
            <button
              type="button"
              onClick={() => modalRef.current.openStaffModal()}
              key={staff.id}
              className="imgContainer"
            >
              <div className="image">
                <SanityImage
                  {...staff.image}
                  alt={staff.name}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </div>
              <h4 className="staffName">{staff.name}</h4>
              <p className="staffPosition">{staff.position}</p>
              <div className="hoverOverlay" />
            </button>
          ))}
        </div>
        <StaffModal ref={modalRef}>
          {about.map((staff) => (
            <div className="modalGrid">
              <SanityImage
                {...staff.image}
                alt={staff.name}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  auto: 'format',
                }}
              />
              {staff.description.map((description) => description)}
              <p>{staff.name}</p>
              <p>{staff.position}</p>
            </div>
          ))}
        </StaffModal>
      </StaffStyles>
      <MapStyles>
        <h2 id="location" className="sectionTitle">
          Our Location
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.5727034135575!2d-108.58856134873398!3d39.093429679440376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87471d1a6a756d8d%3A0x3aff79734926c2fa!2sWestwater%20Engineering!5e0!3m2!1sen!2sus!4v1627299934518!5m2!1sen!2sus"
          width="80%"
          height="600"
          title="Google Map WestWater Engineering"
          allowFullScreen=""
          loading="lazy"
          className="gmap"
        />
      </MapStyles>
    </>
  );
}

export const query = graphql`
  query {
    about: allSanityAbout {
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
      }
    }
  }
`;
