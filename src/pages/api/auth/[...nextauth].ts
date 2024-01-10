import NextAuth, { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization:{
        params:{
            prompt:"consent",
            access_type:"offline",
            response_type:"code"
        }
      },
    }),
    // ...add more providers here
  ]
}

export default NextAuth(authOptions)