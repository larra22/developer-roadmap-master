import type { APIContext } from "astro";
import { updateCategoriaNombreDescripcion } from "../../database/consultas";


export async function POST(context:APIContext):Promise<Response> {
    const data = await context.request.formData();
    const formType = data.get('formType')?.toString();
    if (formType === 'escogerCategoria') {
        
        const categoria= data.get('categoria')?.toString();


          return context.redirect(`/modificar/contenidoCategoria?title=${categoria}`);
    
        
        }

    else if(formType === 'contenidoCategoria'){
    try{
        console.log('pasa')
        const categoria = data.get('categoria');
        const descripcion = data.get('descripcion');
        const categoriaName = data.get('oldCategoria');
        if(categoria && descripcion && categoriaName){
            console.log('âsa àpor')
          await updateCategoriaNombreDescripcion( categoriaName.toString() , categoria.toString(), descripcion.toString())
          return new Response(JSON.stringify({ message: "Ha sido correctamente modificado" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
        }else {
            
                return new Response(JSON.stringify({ message: "Falta algún campo, por favor rellena los necesarios" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
        }

        
        }catch(e){
            console.log(e)
        }
}
    

        return context.redirect('/modificar/categoriaSelect')

    }

    