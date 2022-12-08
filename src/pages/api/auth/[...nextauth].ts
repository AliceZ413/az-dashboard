import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextApiHandler } from 'next';
import prisma from '@/libs/prisma';

const options: NextAuthOptions = {
  debug: true,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60, // second
  },
  jwt: {
    maxAge: 60 * 60, // second, defaults to session.maxAge
    // encode() {},
    // decode() {},
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, req) => {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.username,
          },
        });

        console.log('authorize', user);

        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    /** 登录成功后jwt回调，user中取得数据，在调用signIn才会有值，之后是在cookie中读取 */
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('jwt');
      
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });
      if (!dbUser) {
        token.id = user.id as number;
        return token;
      }
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        image: dbUser.image,
      };
    },
    /** 调用getSession，useSession触发，此处将token存入user中 */
    async session({ session, token, user }) {
      console.log('session');
      
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return baseUrl + url;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};

// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

// export default authHandler;

export default NextAuth(options);
