import type { APIContext } from "astro";
import { getRecursoById, insertOpinionExterno } from "../../database/consultas";


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
      const idRecurso = parseInt(data.get('idRecurso')?.toString() || '0');
      const user= data.get('user')?.toString();
      const fecha = new Date();
      const  valoracionGlobal = parseInt(data.get('valoracion')?.toString() || '0');
      const dificultad = parseInt(data.get('dificultad')?.toString() || '0');
      const topTema = data.get('topTema')?.toString();

        return new Response('calificarInterno');
    }else{
      const idRecurso = parseInt(data.get('id')?.toString() || '0');
        const user= data.get('user')?.toString() || 'null';
      const fecha = new Date();
        const  valoracionGlobal = parseInt(data.get('valoracion')?.toString() || '0');
        const dificultad = parseInt(data.get('dificultad')?.toString() || '0');
       const topTema = data.get('topTema')?.toString() || 'null';


        const n_beneficioso= parseInt(data.get('beneficioso')?.toString() || '0');
        const problematico= parseInt(data.get('problematico')?.toString() || '0');
        const recomendado= parseInt(data.get('recomendado')?.toString() || '0');
      const tiempo = parseInt(data.get('horas')?.toString() || '0');
     const resolutivo = parseInt(data.get('resolutivo')?.toString() || '0');
      const problema = data.get('problema')?.toString() || 'null';
      const extra = data.get('extra')?.toString() || 'null';

      try{
 
          await insertOpinionExterno(user, idRecurso,fecha,valoracionGlobal,dificultad,topTema,problematico,n_beneficioso,recomendado,tiempo,resolutivo,problema,extra)
          return new Response(JSON.stringify({ message: "Ha sido correctamente insertada tu opinión. Gracias por participar" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
        


        
        }catch(e){
            return new Response(JSON.stringify({ message: "Falta algún campo, por favor rellena los necesarios" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }


    }


    }