import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";
export const authOption: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentails");
        }
        console.log(credentials?.email);

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        console.log(user)

        if (!user || !user?.password) {
          throw new Error("Invalid credentails ");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user?.password
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentails");
        }
        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
