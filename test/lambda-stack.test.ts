import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { LambdaStack } from '../src/lambda-stack';

test('Lambda created', () => {
  const app = new cdk.App();
  const stack = new LambdaStack(app, 'LambdaStack');
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Lambda::Function', 1);
});