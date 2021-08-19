// async function turnProjectsIntoPages({ graphql, actions }) {
//     // get template for this page
//     const projectsTemplate = path.resolve('./src/templates/Projects.js');

// // query all projects
// const { data } = await graphql(`
//     query {
//       projects: allSanityProjects {
//         nodes {
//           mainTitle
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);

// // loop over projects and create a page for them
// data.projects.nodes.forEach((project) => {
//     actions.createPage({
//         // What is the URL for the new page?
//         path: `projects/${project.slug.current}`,
//         component: projectsTemplate,
//         context: {
//             slug: project.slug.current,
//         },
//     });
// });
// }
