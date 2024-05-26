import type { APIContext } from "astro";
import { getRecursoById } from "../../database/consultas";

//TODO: FALTA IMPLEMENTAR LO DE GUARDAR LA CALIFICACION EN LA BASE DE DATOS
//TODO: MUY IMPORTANTE
export async function POST(context:APIContext):Promise<Response> {
    const data = await context.request.formData();
    const formType = data.get('formType')?.toString();
    if (formType === 'escogerRecurso') {
        
        const recurso = data.get('recurso')?.toString();
        const id = parseInt(recurso || '0');
        console.log(id);
    
        const elegido = await getRecursoById(id);
        
        if(elegido?.interno){
          return context.redirect(`/opinar/calificarInterno?id='${id}'`);
        }else{  
          return context.redirect(`/opinar/calificarExterno?id=${id}`);
    
        }
    
    }else if(formType === 'calificarInterno'){
        const id = parseInt(data.get('id')?.toString() || '0');
        const calificacion = parseInt(data.get('calificacion')?.toString() || '0');
        const comentario = data.get('comentario')?.toString();
        console.log(id, calificacion, comentario);
        return new Response('calificarInterno');
    }else{
        const id = parseInt(data.get('id')?.toString() || '0');
        const calificacion = parseInt(data.get('calificacion')?.toString() || '0');
        const comentario = data.get('comentario')?.toString();
        console.log(id, calificacion, comentario);
        return new Response('calificarExterno');

    }


    }