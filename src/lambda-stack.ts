import { Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';


// example cdk app stack
export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'ExampleFunction', {
      functionName: 'example-lambda',
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler',
      runtime: lambda.Runtime.NODEJS_14_X,
    });
  }
}