import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import dbConnect from "./utils/dbConnect"
import UserModel from "./model/user"

import GitHub from "next-auth/providers/github"
import type { Provider } from "next-auth/providers"


const providers: Provider[] = [
    GitHub,
    Credentials({
        credentials: { password: { label: "Password", type: "password" } },
        authorize(c) {
            if (c.password !== "password") return null
            return {
                id: "test",
                name: "Test User",
                email: "test@example.com",
            }
        },
    }),
]

export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
})
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
    pages: {
        signIn: "/signin",

    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NextSecret
})
