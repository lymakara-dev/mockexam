import { NextAuthOptions } from "next-auth";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: "124518218719-5i23egip4vb2d0oak33r17etlaj8rith.apps.googleusercontent.com",
            clientSecret: "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",
        })
    ],
    pages: {
        signIn: "/signin",
        signOut: "/signout",
        error: "/error",
        verifyRequest: "/verify",
        newUser: "/new-user",
    }
}

// GOOGLE_CLIENT_ID=124518218719-5i23egip4vb2d0oak33r17etlaj8rith.apps.googleusercontent.com
// GOOGLE_CLIENT_SECRET=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