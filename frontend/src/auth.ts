import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import client from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  session: { strategy: "jwt" },
  trustHost: true,
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
    async signIn({ account, user }) {
      if (account?.access_token && user?.id) {
        const db = client.db();
        await db
          .collection("accounts")
          .updateOne(
            { userId: user.id, provider: account.provider },
            { $set: { access_token: account.access_token } },
            { upsert: true }
          );
      }
      return true;
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.access_token = account.access_token;

        if (user?.id && account.access_token) {
          const db = client.db();
          await db
            .collection("accounts")
            .updateOne(
              { userId: user.id, provider: account.provider },
              { $set: { access_token: account.access_token } },
              { upsert: true }
            );
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.access_token = token.access_token;
      return session;
    },
  },
  debug: true,
  logger: {
    error(code, ...message) {
      console.log(code, message);
      console.log("Cause: ", code.cause);
    },
    warn(code, ...message) {
      console.log(code, message);
    },
    debug(message, metadata) {
      console.log("Message: ", message);
      console.log("Metadata: ", metadata);
    },
  },
  ...authConfig,
});