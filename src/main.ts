import { App } from 'aws-cdk-lib';
import { CdkPipelineStack } from './cdk-pipeline-stack';

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new CdkPipelineStack(app, 'CdkPipelineStack', { env: devEnv });

app.synth();