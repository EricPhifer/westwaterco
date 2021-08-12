import path, { resolve } from 'path';

async function turnStaffIntoPages({ graphql, actions }) {
  // query all staff
  const { data } = await graphql(`
    query {
      staff: allSanityAbout {
        totalCount
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);
  // TODO: fix this
  data.staff.nodes.forEach((staffMember) => {
    console.log(`${staffMember.slug.current} created for ${staffMember.name}`);

    actions.createPage({
      component: resolve('./src/templates/Staff.js'),
      path: `/staff/${staffMember.slug.current}`,
      context: {
        name: staffMember.name,
        slug: staffMember.slug.current,
      },
    });
  });

  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.staff.totalCount / pageSize);
  // loop over staff and create a page for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    console.log(
      `Out of ${
        data.staff.totalCount
      } total pages: Page ${i} created. This will skip ${
        i * pageSize
      } pages and is assigned to page ${i + 1}.`
    );
    actions.createPage({
      // What is the URL for the new page?
      path: `/staffModal/${i + 1}`,
      component: path.resolve('./src/pages/about.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

async function turnProjectsIntoPages({ graphql, actions }) {
  // get template for this page
  const projectsTemplate = path.resolve('./src/templates/Projects.js');

  // query all projects
  const { data } = await graphql(`
    query {
      projects: allSanityProjects {
        nodes {
          mainTitle
          slug {
            current
          }
        }
      }
    }
  `);

  // loop over projects and create a page for them
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      // What is the URL for the new page?
      path: `projects/${project.slug.current}`,
      component: projectsTemplate,
      context: {
        slug: project.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // create pages dynamically
  // wait for all promises to be resolved before finishing function
  await Promise.all([
    turnStaffIntoPages(params),
    turnProjectsIntoPages(params),
  ]);
}
