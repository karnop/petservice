import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import User from "@/models/user";

async function getUserId(email : String) {
    const user = await User.findOne({email : email});
    return await user._id;
}

const authOption = {
    secret : process.env.NEXT_PUBLIC_SECRET!,
    providers : [
        GoogleProvider ({
            clientId : process.env.GOOGLE_CLIENT_ID!,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks : {
        async signIn({user, account}: { user: any, account: any }) {


            if (account.provider == "google") {
                const {name, email} = user;
                try {
                    const baseUrl = process.env.PROJECT_URL!;
                    const url = baseUrl + `api/register_user`;
                    const response = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({name, email})
                    })

                    if (response.ok) {
                        return user;
                    }
                } catch (error) {
                    console.log("ERROR IN NEXT-AUTH CALLBACK : " + error);
                }
            }
            return user
        },

        async jwt({ token, account } : {token : any, account : any}) {
            // Persist the OAuth access_token to the token right after sign-in
            if (account) {
                token.accessToken = account.access_token
            }
            return token;
        },
        async session({ session, token, user } : {session : any, token : any, user : any}) {
            // Send properties to the client, like an access_token from a provider
            session.user.id = await getUserId(session.user.email);
            return session;
        }
    }
}

const handler = NextAuth(authOption);

export {handler as GET, handler as POST}