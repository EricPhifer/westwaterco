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
import StaffPagination from '../components/StaffPagination';

const ContactStyles = styled.div`
  /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.3.6,
* Autoprefixer: v10.3.1
* Browsers: last 4 version
*/

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
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 5vh;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: minmax(0, 1fr) 1rem minmax(0, 1fr) 1rem minmax(0, 1fr)
      1rem minmax(0, 1fr) 1rem minmax(0, 1fr) 1rem minmax(0, 1fr) 1rem
      minmax(0, 1fr) 1rem minmax(0, 1fr) 1rem minmax(0, 1fr) 1rem minmax(0, 1fr)
      1rem minmax(0, 1fr) 1rem minmax(0, 1fr);
    grid-template-columns: repeat(12, minmax(0, 1fr));
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    gap: 2rem;
    place-content: space-evenly;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .header {
      -ms-grid-column: 3;
      -ms-grid-column-span: 8;
      grid-column: 3 / span 8;
      -ms-grid-row-align: center;
      -ms-grid-column-align: center;
      place-self: center;
      text-align: center;
      font-size: 3.7rem;
      text-transform: uppercase;
      text-shadow: 2px 2px 10px black;
    }

    form {
      display: -ms-grid;
      display: grid;
      -ms-grid-column: 3;
      -ms-grid-column-span: 8;
      grid-column: 3 / span 8;
      -ms-grid-rows: auto;
      grid-template-rows: auto;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 1.5rem 0;
      gap: 0;
    }
    .container {
      -ms-grid-column: 1;
      -ms-grid-column-span: 6;
      grid-column: 1 / span 6;
      border: none;
      display: -ms-grid;
      display: grid;
      -ms-grid-columns: subgrid;
      grid-template-columns: subgrid;
      -ms-grid-rows: auto;
      grid-template-rows: auto;
      -webkit-box-align: center;
      -ms-flex-align: center;
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
        -ms-grid-column: 1;
        -ms-grid-column-span: 4;
        grid-column: 1 / span 4;
      }
      #phoneContainer {
        -ms-grid-column: 5;
        -ms-grid-column-span: 4;
        grid-column: 5 / span 4;
      }
      #emailContainer {
        -ms-grid-column: 1;
        -ms-grid-column-span: 8;
        grid-column: 1 / span 8;
      }
      #messageContainer {
        -ms-grid-column: 1;
        -ms-grid-column-span: 8;
        grid-column: 1 / span 8;
      }
      #recaptchaContainer {
        -ms-grid-column: 1;
        -ms-grid-column-span: 8;
        grid-column: 1 / span 8;
      }
      #submitContainer {
        -ms-grid-column: 1;
        -ms-grid-column-span: 8;
        grid-column: 1 / span 8;
        margin-left: 1rem;
      }
    }
    .container > *:nth-child(1) {
      -ms-grid-row: 1;
      -ms-grid-column: 1;
    }
    #numberContact {
      -ms-grid-row-align: center;
      -ms-grid-column-align: center;
      place-self: center;
    }
    .numberContact {
      color: white;
      -ms-grid-column: 3;
      -ms-grid-column-span: 8;
      grid-column: 3 / span 8;
      text-decoration: none;
      text-align: center;
      text-shadow: 2px 2px 10px black;
      font-size: 1.5rem;
      .coName {
        display: none;
      }
      a[href^='tel:'] {
        text-decoration: none;
        border-bottom: 1px solid orangered;
      }
    }
    button {
      width: 100%;
      font-size: 1.4rem;
      -webkit-box-shadow: none;
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
    .iconContainer {
      -ms-grid-column: 3;
      -ms-grid-column-span: 8;
      grid-column: 3 / span 8;
    }
    @-webkit-keyframes bounce {
      from {
        -webkit-transform: translateY(0);
      }
      to {
        -webkit-transform: translateY(5px);
      }
    }
    @keyframes bounce {
      from {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      to {
        -webkit-transform: translateY(5px);
        transform: translateY(5px);
      }
    }
    .heroIcon {
      font-size: 5rem;
      -webkit-animation: bounce 0.7s ease-in-out infinite alternate;
      animation: bounce 0.7s ease-in-out infinite alternate;
    }
  }
  @supports (--ms-ime-align: auto) {
    .gridContainer > *:nth-child(1) {
      -ms-grid-row: 1;
      -ms-grid-column: 1;
    }
    .gridContainer > *:nth-child(2) {
      -ms-grid-row: 1;
      -ms-grid-column: 3;
    }
    .gridContainer > *:nth-child(3) {
      -ms-grid-row: 1;
      -ms-grid-column: 5;
    }
    .gridContainer > *:nth-child(4) {
      -ms-grid-row: 1;
      -ms-grid-column: 7;
    }
    .gridContainer > *:nth-child(5) {
      -ms-grid-row: 1;
      -ms-grid-column: 9;
    }
    .gridContainer > *:nth-child(6) {
      -ms-grid-row: 1;
      -ms-grid-column: 11;
    }
    .gridContainer > *:nth-child(7) {
      -ms-grid-row: 1;
      -ms-grid-column: 13;
    }
    .gridContainer > *:nth-child(8) {
      -ms-grid-row: 1;
      -ms-grid-column: 15;
    }
    .gridContainer > *:nth-child(9) {
      -ms-grid-row: 1;
      -ms-grid-column: 17;
    }
    .gridContainer > *:nth-child(10) {
      -ms-grid-row: 1;
      -ms-grid-column: 19;
    }
    .gridContainer > *:nth-child(11) {
      -ms-grid-row: 1;
      -ms-grid-column: 21;
    }
    .gridContainer > *:nth-child(12) {
      -ms-grid-row: 1;
      -ms-grid-column: 23;
    }
  }
  @media only screen and (max-width: 900px) {
    .gridContainer {
      -ms-grid-columns: (minmax(0, 1fr)) (minmax(0, 1fr)) (minmax(0, 1fr))
        (minmax(0, 1fr)) (minmax(0, 1fr)) (minmax(0, 1fr));
      grid-template-columns: repeat(6, minmax(0, 1fr));
      .header {
        -ms-grid-column: 1;
        -ms-grid-column-span: 6;
        grid-column: 1 / span 6;
      }
      form {
        -ms-grid-column: 1;
        -ms-grid-column-span: 6;
        grid-column: 1 / span 6;
        max-width: 685px;
        margin: 0 auto;
      }
      .numberContact {
        -ms-grid-column: 1;
        -ms-grid-column-span: 6;
        grid-column: 1 / span 6;
      }
      .iconContainer {
        -ms-grid-column: 1;
        -ms-grid-column-span: 6;
        grid-column: 1 / span 6;
      }
      .container {
        padding: 0;
        #nameContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 3;
          grid-column: 1 / span 3;
        }
        #phoneContainer {
          -ms-grid-column: 4;
          -ms-grid-column-span: 3;
          grid-column: 4 / span 3;
        }
        #emailContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 6;
          grid-column: 1 / span 6;
        }
        #messageContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 6;
          grid-column: 1 / span 6;
        }
        #submitContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 6;
          grid-column: 1 / span 6;
          max-width: 400px;
          width: 400px;
          margin: 0 auto;
          padding: 0;
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .gridContainer {
      -ms-grid-columns: (minmax(0, 1fr)) (minmax(0, 1fr)) (minmax(0, 1fr));
      grid-template-columns: repeat(3, minmax(0, 1fr));
      .header {
        -ms-grid-column: 1;
        -ms-grid-column-span: 3;
        grid-column: 1 / span 3;
      }
      form {
        -ms-grid-column: 1;
        -ms-grid-column-span: 3;
        grid-column: 1 / span 3;
      }
      .numberContact {
        -ms-grid-column: 1;
        -ms-grid-column-span: 3;
        grid-column: 1 / span 3;
      }
      .iconContainer {
        -ms-grid-column: 1;
        -ms-grid-column-span: 3;
        grid-column: 1 / span 3;
      }
      .container {
        padding: 0;
        max-width: 95%;
        #nameContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 3;
          grid-column: 1 / span 3;
          max-width: 95%;
        }
        #phoneContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 3;
          grid-column: 1 / span 3;
          max-width: 95%;
        }
        #emailContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 3;
          grid-column: 1 / span 3;
          max-width: 95%;
        }
        #messageContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 3;
          grid-column: 1 / span 3;
          max-width: 95%;
        }
        #submitContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 3;
          grid-column: 1 / span 3;
          max-width: 95%;
          width: 400px;
          margin: 0 auto;
          padding: 0;
        }
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .gridContainer {
      -ms-grid-columns: (minmax(0, 1fr)) (minmax(0, 1fr)) (minmax(0, 1fr))
        (minmax(0, 1fr)) (minmax(0, 1fr)) (minmax(0, 1fr));
      grid-template-columns: repeat(6, minmax(0, 1fr));
      .header {
        -ms-grid-column: 1;
        -ms-grid-column-span: 6;
        grid-column: 1 / span 6;
      }
      form {
        -ms-grid-column: 1;
        -ms-grid-column-span: 6;
        grid-column: 1 / span 6;
      }
      .numberContact {
        -ms-grid-column: 1;
        -ms-grid-column-span: 6;
        grid-column: 1 / span 6;
        font-size: 1.2rem;
      }
      .iconContainer {
        -ms-grid-column: 1;
        -ms-grid-column-span: 6;
        grid-column: 1 / span 6;
      }
      .container {
        padding: 0;
        #nameContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 6;
          grid-column: 1 / span 6;
        }
        #phoneContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 6;
          grid-column: 1 / span 6;
        }
        #emailContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 6;
          grid-column: 1 / span 6;
        }
        #messageContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 6;
          grid-column: 1 / span 6;
        }
        #submitContainer {
          -ms-grid-column: 1;
          -ms-grid-column-span: 6;
          grid-column: 1 / span 6;
          width: 100vw;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
`;

const StaffStyles = styled.div`
  /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.3.6,
* Autoprefixer: v10.3.1
* Browsers: last 4 version
*/

  max-width: 1200px;
  margin: 0 auto;
  background: rgba(247, 249, 251, 1);
  button {
    padding: 0;
  }
  a {
    text-decoration: none;
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
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: minmax(0, 1fr) 5rem minmax(0, 1fr) 5rem minmax(0, 1fr);
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem 5rem;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
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
      -webkit-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
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
  @media only screen and (min-width: 570px) and (max-width: 860px) {
    .grid {
      -ms-grid-columns: (minmax(0, 1fr)) (minmax(0, 1fr));
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media only screen and (max-width: 569px) {
    .grid {
      -ms-grid-columns: (minmax(0, 1fr));
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
`;

const MapStyles = styled.div`
  /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.3.6,
* Autoprefixer: v10.3.1
* Browsers: last 4 version
*/

  width: 100vw;
  background-image: url(${siteBG});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  display: -ms-grid;
  display: grid;
  grid-template-columns: 1fr;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
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
    max-width: 1200px;
    width: 80%;
    height: 600px;
    margin: 3.5rem;
    border: 0;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.7);
  }
  @media only screen and (max-width: 786px) {
    .gmap {
      width: 90%;
      height: 350px;
    }
  }
  @media only screen and (max-width: 400px) {
    .gmap {
      width: 90%;
      height: 350px;
    }
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
  // need to create a function to manage what content is returned based on the position of the Link in the Sanity array

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
              name="contact"
              id="formContainer"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
              data-netlify-recaptcha="true"
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
              <p itemScope itemType="https://westwaterco.com">
                Phone:{' '}
                <span className="coName" itemProp="name">
                  WestWater Engineering
                </span>
                <span itemProp="telephone">
                  <a href="tel:9702417076" className="phoneNumber">
                    970-241-7076
                  </a>{' '}
                </span>
                | Fax:{' '}
                <a href="fax:9702417097" className="faxNumber">
                  970-241-7097
                </a>
              </p>
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
          {about.map((aboutStaff) => (
            <Link
              type="button"
              value="Modal Button"
              role="button"
              onClick={() => modalRef.current.openStaffModal()}
              to={`#${aboutStaff.name.toLowerCase().split(' ', 1)}`}
              className="imgContainer"
              key={aboutStaff.id}
            >
              <div className="image">
                <SanityImage
                  {...aboutStaff.image}
                  alt={aboutStaff.name}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </div>
              <h4 className="staffName">{aboutStaff.name}</h4>
              <p className="staffPosition">{aboutStaff.position}</p>
              <div className="hoverOverlay" />
            </Link>
          ))}
        </div>
        <StaffModal ref={modalRef}>
          <StaffPagination />
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
  query($skip: Int = 0, $pageSize: Int = 1) {
    about: allSanityAbout {
      nodes {
        id
        name
        position
        image {
          asset {
            id
          }
          ...ImageWithPreview
        }
      }
    }
    staff: allSanityAbout(skip: $skip, limit: $pageSize) {
      totalCount
      nodes {
        id
        name
        position
        description
        image {
          ...ImageWithPreview
        }
        slug {
          current
        }
      }
    }
  }
`;
