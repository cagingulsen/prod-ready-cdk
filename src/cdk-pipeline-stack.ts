import { Stack, StackProps, Stage } from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { LambdaStack } from './lambda-stack';

export class LambdaStage extends Stage {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new LambdaStack(this, 'LambdaStack');
  }
}

export class CdkPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const codePipelineSource = CodePipelineSource.connection('cagingulsen/prod-ready-cdk', 'main', {
      connectionArn: 'arn:aws:codestar-connections:eu-west-1:YOUR_ACCOUNTI_D:connection/YOUR_CONNECTION_ID',
    },
    );

    const cdkPipeline = new CodePipeline(this, 'CdkPipeline', {
      pipelineName: 'lambda-stack-cdk-pipeline',
      synth: new ShellStep('Synth', {
        input: codePipelineSource,
        commands: [
          'yarn install --frozen-lockfile',
          'npx projen build',
          'npx projen synth',
        ],
      }),
    });

    cdkPipeline.addStage(new LambdaStage(this, 'dev'));
  }
}
