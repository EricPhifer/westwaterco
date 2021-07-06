import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import homepage from './home';
import projects from './projects';
import about from './about';
import engineering from './engineering';
import environmental from './environmental';
import privacyPolicy from './privacyPolicy';
import termsConditions from './termsConditions';
import HomeContent from '../components/HomeContent';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    homepage,
    projects,
    about,
    engineering,
    environmental,
    privacyPolicy,
    termsConditions,
    HomeContent,
  ]),
});
