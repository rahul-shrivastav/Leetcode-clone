import NextAuth from "next-auth"
// import Credentials from "next-auth/providers/credentials"
// import bcrypt from 'bcryptjs'
// import UserModel from '@/model/user';
// import dbConnect from "@/utils/dbConnect";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        // Credentials({

        //     credentials: {
        //         username: { label: "Username", type: "text" },
        //         password: { label: "Password", type: "password" },
        //     },

        //     authorize: async (credentials: any) => {
        //         await dbConnect();

        //         const { username, password } = credentials;
        //         const user = await UserModel.findOne({ username });
        //         const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        //         if (!user || !isPasswordCorrect) {
        //             throw new Error('No username or password');
        //         }
        //         console.log("Logged In")
        //         return user
        //     },
        // }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET

        })
    ],
    pages: {
        signIn: "/signin",

    }
})