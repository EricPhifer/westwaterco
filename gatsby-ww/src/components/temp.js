// import React from 'react';
// import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
// import styled from 'styled-components';

// const SingleProjectStyles = styled.div`
//   margin: 150px auto;
//   max-width: 60vw;
//   color: black;
//   background-color: var(--white);
//   h2 {
//     margin: 3.5rem 0;
//     font-size: 3rem;
//     text-align: center;
//     text-decoration: none;
//   }
//   p {
//     font-size: 1.5rem;
//   }
// `;

// export default function SingleProjectsPage({ data }) {
//   const { projects } = data;
//   return (
//     <SingleProjectStyles>
//       <div key={projects.id} className="contentContainer">
//         <div className="image">
//           {projects.image ? (
//             <SanityImage
//               {...projects.image}
//               alt={projects.mainTitle}
//               style={{
//                 width: '100%',
//                 height: '400px',
//                 objectFit: 'cover',
//                 auto: 'format',
//               }}
//             />
//           ) : (
//             <div className="noImage">No available image.</div>
//           )}
//         </div>
//         <h2 className="mainTitle">{projects.mainTitle}</h2>
//         {projects.mainContent.map((content) => (
//           <span key={content}>
//             <p className="mainContent">{content}</p>
//           </span>
//         ))}
//         <div className="carousel">
//           {console.log(projects)}
//           {projects.gallery.map((images) => (
//             <div className="imageContainer">
//               <SanityImage
//                 {...images}
//                 alt="Project Gallery Image"
//                 style={{
//                   height: '200px',
//                   objectFit: 'cover',
//                   auto: 'format',
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </SingleProjectStyles>
//   );
// }
// export const query = graphql`
//   query($slug: String) {
//     projects: sanityProjects(slug: { current: { eq: $slug } }) {
//       id
//       mainTitle
//       mainContent
//       image {
//         ...ImageWithPreview
//       }
//       slug {
//         current
//       }
//       gallery {
//         ...ImageWithPreview
//       }
//     }
//   }
// `;
