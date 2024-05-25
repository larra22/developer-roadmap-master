import type { APIContext } from "astro";
import { getRecursoById } from "../../database/consultas";

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
    
    }


    }