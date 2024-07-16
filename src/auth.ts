import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import dbConnect from "./utils/dbConnect"
import UserModel from "./model/user"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials: any) => {
                dbConnect()
                let user: any = null
                // logic to salt and hash password
                const pwHash = bcrypt.hash(credentials.password, 10)

                // logic to verify if user exists
                user = await UserModel.find({ username: credentials.username })

                if (!user) {
                    throw new Error("User not found.")
                } else if (user.password != pwHash) {
                    throw new Error("Password Incorrect.")
                }
                return user
            },
        }),
    ],
})