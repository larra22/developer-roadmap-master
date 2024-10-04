import type { APIContext } from "astro";
import { generateId } from "lucia";
import {Argon2id} from "oslo/password"
import { insertUsuario, insertAdmin } from "../../database/consultas";
import { lucia } from "../../auth.ts";


export async function POST(context:APIContext): Promise<Response>{
    //Leemos los datos del formulario

        const formData = await context.request.formData();
        const username= formData.get('username')
        const password = formData.get('password')
        const admin = formData.get('admin')

        //Validamos los datos (que este todo bien)
        if(!username || !password){
            return new Response("El usuario o la contraseña son necesarios", {status:400});

        }

        if(typeof username !=='string' || username.length<4){
            return new Response('El usuario deben ser carácteres y logintud mayor que 4', {status:400})

        }

        if(typeof password !=='string' || password.length<4){
            return new Response('La contraseña debe ser mayor que 4 caracteres', {status:400})

        }

        const userId= generateId(15);
        const hashPassword = await new Argon2id().hash(password)

        if(admin){
            //Insertamos usuario siendo admin a la BD
            await insertAdmin(userId, username, hashPassword, 1)

        }else{
            //Insertamos en la base de datos usuario normal sin admin
        await insertUsuario(userId, username, hashPassword)

        }

        

        //Ya nos hemos registrado

        //ahora iniciamos sesión seguido

        const session = await lucia.createSession(userId,{});

        const sessionCookie = lucia.createSessionCookie(session.id)
        
        context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

        return context.redirect('/home')
}