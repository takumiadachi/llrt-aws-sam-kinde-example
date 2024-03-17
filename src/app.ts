import { APIGatewayProxyEvent, Context} from 'aws-lambda';
// require('dotenv').config();

// import {createKindeServerClient, GrantType} from "@kinde-oss/kinde-typescript-sdk";

// // Client for authorization code flow
// const kindeClient = createKindeServerClient(GrantType.AUTHORIZATION_CODE, {
//     authDomain: process.env.KINDE_DOMAIN,
//     clientId: process.env.KINDE_CLIENT_ID,
//     clientSecret: process.env.KINDE_CLIENT_SECRET,
//     redirectURL: process.env.KINDE_REDIRECT_URI,
//     logoutRedirectURL: process.env.KINDE_LOGOUT_REDIRECT_URI
// });

export async function lambdaHandler(event: APIGatewayProxyEvent, context: Context) {
    console.log(event.httpMethod)
    console.log(context.functionName)
    // console.log(process.env)
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        console.log(err);
        return {
            'statusCode': 500,
            'body': JSON.stringify({
                message: '500 Server Error',
            })
        };
    }
};
