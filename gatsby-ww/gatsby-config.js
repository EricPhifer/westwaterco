import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'WestWater Engineering',
    siteUrl: 'https://www.westwaterco.com',
    description: 'Consulting engineers and scientists.',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-recaptcha',
    'gatsby-plugin-portal',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'iyuyckwx',
        dataset: 'production',
        apiVersion: '2021-05-12',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
        useCdn: false,
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: 'iyuyckwx',
        dataset: 'production',
      },
    },
  ],
};
