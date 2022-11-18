import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { DataTypes, Sequelize } from "sequelize";
import { devConfig } from "@/config";
import SequelizeAdapter, { models } from "@next-auth/sequelize-adapter";
import db from "@/models";

console.log(db);

const sequelize = new Sequelize(devConfig);

sequelize.sync();

// import NextAuth from "next-auth"
// import SequelizeAdapter, { models } from "@next-auth/sequelize-adapter"
// import Sequelize, { DataTypes } from "sequelize"
// const sequelize = new Sequelize("sqlite::memory:")
// export default NextAuth({
//   // https://next-auth.js.org/providers/overview
//   providers: [],
//   adapter: SequelizeAdapter(sequelize, {
//     models: {
//       User: sequelize.define("user", {
//         ...models.User,
//         phoneNumber: DataTypes.STRING,
//       }),
//     },
//   }),
// })

export default NextAuth({
  adapter: SequelizeAdapter(sequelize, {
    models: {
      User: sequelize.define("user", {
        ...models.User,
        phoneNumber: DataTypes.STRING,
      }),
    },
  }),
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
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
  },
});
