import { db } from "@/app/_lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compareSync } from "bcrypt-ts";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: "/"
    },

    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                username: {},
                password: {}
            },
            async authorize(credentials) {

                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                const user = await db.user.findUnique({
                    where: {
                        username: credentials.username
                    }
                })

                if (!user) {
                    return null;
                }

                const validatePassword = compareSync(credentials.password, user.password)

                if (validatePassword) {
                    return { id: user.id, username: user.username, email: user.email };
                }

                return null;
            }
        })
    ]
})

export { handler as GET, handler as POST }
