/* eslint-disable */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity


import homepage from './homepage';
import termsConditions from './termsConditions';
import privacyPolicy from './privacyPolicy';
import engineering from './engineering';
import environmental from './environmental';
import projects from './projects';
import about from './about';
import Gallery from '../components/Gallery';
import EngServices from '../components/EngServices';


export default createSchema({
  // name the schema
  name: 'default',
  // concatenating document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    engineering,
    environmental,
    homepage,
    termsConditions,
    privacyPolicy,
    projects,
    about,
    Gallery,
    EngServices,
  ]),
});
