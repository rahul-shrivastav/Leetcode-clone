import NextAuth from "next-auth"
import Google from "next-auth/providers/google";
import dbConnect from "./utils/dbConnect";
import UserModel from '@/model/user';

export const { handlers, signIn, signOut, auth } = NextAuth({
    trustHost: true,
    secret: process.env.AUTH_SECRET,
    trustHostedDomain: true,
    // debug: true, 
    providers: [

        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET

        })
    ],
    callbacks: {
        //@ts-ignore
        async signIn({ user, account, profile }) {
            // console.log(user.email, 'sininin')
            try {
                let response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/login`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: user.email }),
                });
                const dbuser = await response.json()
                console.log("fetching done", dbuser)
                // @ts-ignore
                user.data = dbuser;
                if (!dbuser) {
                    console.log('dbfailed')
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }

            return user
        },
        async jwt({ token, user }: any) {
            if (user) {
                token.user = user
                // console.log('token', token, 'token')
            }
            return token;
        },
        async session({ session, token }: any) {
            session.user = token.user
            if (token) {
                // console.log(session, 'session')
                return session
            }
            return session;
        }
    },


    pages: {
        signIn: "/signin",

    }
})