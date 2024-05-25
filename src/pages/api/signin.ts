import type { APIContext } from "astro";
import { getUsuario } from "../../database/consultas";
import {Argon2id} from "oslo/password"
import { lucia } from "../../auth.ts";

export async function POST(context:APIContext):Promise<Response> {
    //Leemos los datos dados

    const formData =await context.request.formData();
    const username= formData.get("username")
    const password=formData.get("password")

    if(typeof username !== "string"){
        return new Response("Usuario no válido",
            {
                status:400
            }
        )
    }

    if(typeof password !== "string"){
        return new Response("Contraseña no válida",
            {
                status:400
            }
        )
    }

    //Buscar que el usuario exista
    const foundUser = await getUsuario(username)

    if(!foundUser){
        return new Response('Nombre de usuario o contraseña incorrecto',
            {status:400}
        )
    }

    if(!foundUser.password){
        return new Response('Estas registrado con otro método', 
            {status:400}
        )
    }

    const validPassword = await new Argon2id().verify(foundUser.password, password)

    //Contraseña incorrecta:
    if(!validPassword){
        return new Response('Nombre de usuario o contraseña incorrecto',
            {status:400}
        )
    }

    //Contraseña todo bien, puede logearse:
    const session = await lucia.createSession(foundUser.id,{});
    const sessionCookie = lucia.createSessionCookie(session.id)
    context.cookies.set(sessionCookie.name,sessionCookie.value,sessionCookie.attributes)

    return context.redirect('/home')
}