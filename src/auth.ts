import { Lucia } from "lucia";
import { Mysql2Adapter } from "@lucia-auth/adapter-mysql";
import mysql from "mysql2/promise";
import { db } from "./database/dbMySQL";

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	username: string;
    admin:number
}

const adapter = new Mysql2Adapter(db, {
	user: "user",
	session: "user_session"
});

export const lucia = new  Lucia(adapter, {
    getUserAttributes: (attributes) => {
		return {
			username: attributes.username,
            admin: attributes.admin
		};
	},
    
    sessionCookie: {
        attributes: {
            secure: import.meta.env.PROD
         }
    }
})