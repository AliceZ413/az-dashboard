import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { devConfig } from "@/config";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// let prisma;
// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
// } else {
//   if (!global.cachedPrisma) {
//     global.cachedPrisma = new PrismaClient();
//   }
//   prisma = global.cachedPrisma;
// }
let prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  providers: [
    GithubProvider({
      clientId: "beb0c20fe72208b83a34",
      clientSecret: "50c0ab0543a06ce7aff3caee7974afda86b18b99",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.User.findFirst({
          where: {
            email: credentials.username,
          },
        });

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
      }
    },
    async jwt({ token, user }) {
      console.log("jwt", token);
      const dbUser = await prisma.User.findFirst({
        where: {
          email: token.email,
        },
      });
      if (!dbUser) {
        token.id = user.id;
        return token;
      }
      return {
        id: dbUser.id,

      };
    },
  },
});
