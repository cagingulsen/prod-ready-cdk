const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  authorAddress: 'cagingulsen@gmail.com',
  authorName: 'Kemal Cagin Gulsen',
  cdkVersion: '2.15.0',
  defaultReleaseBranch: 'main',
  name: 'prod-ready-cdk',
  description: 'An AWS CDK App project to learn more about it',
  repositoryUrl: 'https://github.com/cagingulsen/prod-ready-cdk.git',
  keywords: [
    'AWS CDK',
    'projen',
    'Typescript',
    'Deployment',
  ],
  license: 'Apache-2.0',

  // cdkDependencies: undefined,  /* Which AWS CDK modules (those that start with "@aws-cdk/") this app uses. */
  // deps: [],                    /* Runtime dependencies of this module. */
  // devDeps: [],                 /* Build dependencies for this module. */
  // packageName: undefined,      /* The "name" in package.json. */
  // release: undefined,          /* Add release management to this project. */
});
project.synth();
