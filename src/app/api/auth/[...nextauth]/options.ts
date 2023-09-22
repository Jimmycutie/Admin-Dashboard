import type {NextAuthOptions} from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
// import AppleProvider from "next-auth/providers/apple"
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        // AppleProvider({
        //     clientId: process.env.APPLE_ID as string,
        //     clientSecret: process.env.APPLE_SECRET as string
        // }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email:",
                    type: "email",
                    placeholder:"email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password"
                }
            },
            async authorize(credentials, req){
                //to retrieve user data to verify credentials
                const user = {id:"1", email:"johndoe@gmail.com", password: "nextauth"}

                if(credentials?.email === user.email && credentials?.password === user.password){
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    pages:{
        signIn:"/api/auth/login"
    }
}