# AWS SAM LLRT Example

Example configuration for AWS SAM bundling a lambda with LLRT runtime

Reference documentation
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/building-custom-runtimes.html

# SAM Usage
> [!Important]
> Ensure you have AWS SAM cli, node installed
> ensure you have run `aws configure` and have your access key, secret key and region setup

* `tsc` -- compile typescript code
* `sam build` -- build your deployable package
* `sam locla invoke` -- test locally before deploying
* `sam deploy --guided` -- deploy cloudformation stack to AWS
