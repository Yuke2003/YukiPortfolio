import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./userController";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      console.log("Authorized callback:", auth);
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existGuest = await getGuest(user.email);
        if (!existGuest.data) {
          await createGuest({
            email: user.email,
            username: user.name,
            photo: user.image,
          });
        }
        return true;
      } catch {
        return false;
      }
    },
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
