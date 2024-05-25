import { Lucia } from "lucia";
import { Mysql2Adapter } from "@lucia-auth/adapter-mysql";
import mysql from "mysql2/promise";
import { db } from "./database/dbMySQL";


const adapter = new Mysql2Adapter(db, {
	user: "user",
	session: "user_session"
});

export const lucia = new  Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: import.meta.env.PROD
         }
    }
})