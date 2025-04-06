import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'
import mongoose from 'mongoose';
import User from '@/app/models/User';
import connectDB from '@/app/db/connect';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "google") {
        const finduer =await User.findOne({ email: email })
        if (!finduer) {
          const newuser = ({
            name: user,
            email: email,
            profilePic: profile
          })

          await newuser.save()
          console.log(newuser)
        }
        else{
         
        }
        return true
      }
    },
  },
  // secret: process.env.NEXTAUTH_SECRET, // Required for JWT
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };