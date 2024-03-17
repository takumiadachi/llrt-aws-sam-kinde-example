export const lambdaHandler = async (event, context) => {
    console.log(event.httpMethod);
    console.log(context.functionName);
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        };
    }
    catch (err) {
        console.log(err);
        return {
            'statusCode': 500,
            'body': JSON.stringify({
                message: '500 Server Error',
            })
        };
    }
};
