import type { APIContext } from "astro";
import { insertCategoria, getAllCategorias } from "../../database/consultas";


export async function POST(context: APIContext): Promise<Response> {
    const data = await context.request.formData();

    const titulo = data.get("titulo")?.toString();
    const descripcion = data.get("descripcion")?.toString();
    const categoriaPadre = data.get("categoriaPadre")?.toString();

    if (titulo && descripcion && categoriaPadre) {
        try {
            await insertCategoria(titulo, descripcion, categoriaPadre);
            return new Response(JSON.stringify({ message: "Ha sido correctamente insertado" }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            return new Response(JSON.stringify({ message: "Ya existe una categoría con ese título", error: errorMessage }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }
    }else if(titulo && descripcion){
        try {
            await insertCategoria(titulo, descripcion, 'Global');
            return new Response(JSON.stringify({ message: "Ha sido correctamente insertado una GLOBAL" }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            return new Response(JSON.stringify({ message: "Ya existe una categoría con ese título", error: errorMessage }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }
    
    } else {
        return new Response(JSON.stringify({ message: "Falta algún campo, por favor rellena los necesarios" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }

    
}


