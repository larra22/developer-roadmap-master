import { createControl, createLabel, createPropertiesFlechas, createTextArea , createComponent, createMockUp, createGlobal} from "./estructuraJson";

const COLOR_GRIS= '8421504';
const COLOR_NEGRO= '0';
const COLOR_VERDE= '248890';
const COLOR_LKS = '16275712';
const COLOR_BLANCO= '16777215';
const COLOR_ROJO = '16711680';
const COLOR_AMARILLO = '16776960';


const centro_X=1000;
const principio_Y = 0;

function extructuraCorrectaJson(json: any): boolean{
    return json && json.mockup && json.mockup.controls && json.mockup.controls.control;
}



export function crearGrafico(listaCategoriasPrimerNivel:string[],  listaCategoriasSegundoNivel:[string,string][], subTercerNivel:[string,string][]){
    console.log('crear grtafico')
    console.log(subTercerNivel)


    const listaComponentesPrimerNivel = crearCuadrados(listaCategoriasPrimerNivel,listaCategoriasSegundoNivel, subTercerNivel,COLOR_AMARILLO);
   console.log(listaCategoriasSegundoNivel)

    const controls = {control:[]}

    const mockup = createMockUp(controls, "4000","1800","4000","1390","1.0")
    mockup.controls.control=listaComponentesPrimerNivel;

    const global = createGlobal(mockup)

    console.log(global)

    return global
}

export function crearCuadradosSegundoNivel(listaTitulos: [string,string][],padre:string,color:string,yPrimerNivel:number, subTercerNivel:[string,string][]){
    let listaHijos = listaTitulos.filter((categoriaPadre)=> categoriaPadre[1]==padre).map((categoriaPadre)=> categoriaPadre[0]);
    const limit = listaHijos.length ?? 0;
    let listaComponentes= []
    let x=1000;
    console.log('tercer nivel')
    console.log(subTercerNivel)

    let i=0;
    while (limit >i ){
        const textArea = createTextArea(color);
        const control0 = createControl("0","200","400", textArea, "TextArea", "325", "0", "0", "0", "50");
        const label = createLabel("20", listaHijos[i]);
        const control1= createControl("1","25","100", label,"Label","88","50","11","1")
        const componente = createComponent((i*100).toString(), "70", "46", "200", listaHijos[i], [control0, control1],"121", (x-250).toString(), (yPrimerNivel+90).toString(),  "100");
        listaComponentes.push(componente);
        x+=350;
        const hijos = crearCuadradosTercerNivel(subTercerNivel, listaHijos[i], COLOR_GRIS, yPrimerNivel+90);
        listaComponentes.push(...hijos);
        i++;

    }
    return listaComponentes;
}

export function crearCuadradosTercerNivel(listaTitulos: [string,string][],padre:string,color:string,yPrimerNivel:number){
    let listaHijos = listaTitulos.filter((categoriaPadre)=> categoriaPadre[1]==padre).map((categoriaPadre)=> categoriaPadre[0]);
    const limit = listaHijos.length ?? 0;
    let listaComponentes= []
    let x=1000;
    console.log(listaTitulos)
    let i=0;
    while (limit >i ){
        const textArea = createTextArea(color);
        const control0 = createControl("0","200","400", textArea, "TextArea", "325", "0", "0", "0", "50");
        const label = createLabel("20", listaHijos[i]);
        const control1= createControl("1","25","100", label,"Label","88","50","11","1")
        const componente = createComponent((i*100).toString(), "70", "46", "200", listaHijos[i], [control0, control1],"121", (x-250).toString(), (yPrimerNivel+90).toString(),  "100");
        listaComponentes.push(componente);
        x+=350;
        i++;

    }
    return listaComponentes;
}

function crearCuadrados(listaTitulos: string[],subcategorias:[string,string][], subTercerNivel:[string,string][],color:string){
    let listaConComponentes= [];
    let listaFlechas=[];
    const max = listaTitulos.length;
    let i=0;


    while (i==0){

        const flecha= crearFlecaPrincipal(i+10);
        listaFlechas.push(flecha);
        const textArea = createTextArea(COLOR_AMARILLO)

        const texto = listaTitulos[i];
        const label = createLabel("25", texto)

        const control1= createControl("1", "25","100",label,"Label","88","24","11","1")
        const control0 = createControl("0","200","400", textArea, "TextArea", "325", "0", "0", "0", "50");

        const componente = createComponent(i.toString(), "70", "46", "200",texto, [control0, control1],"121", centro_X.toString(), principio_Y.toString(),  "100");

        const hijos = crearCuadradosSegundoNivel(subcategorias, texto, COLOR_GRIS, principio_Y_primer_nivel, subTercerNivel);
        listaConComponentes.push(...hijos);
        console.log(hijos)
        i++;
    }

   // listaFlechas.concat(listaConComponentes);
    
    return listaFlechas


}


function crearFlecaPrincipal(i: number){
   // const propiedades=createPropertiesFlechas(COLOR_AMARILLO, '0', 'top', 'false', {x: '0', y: '149',length:'149'}, {x: '-0.0047699137004053056', y: '0.46874741514792245',length:'0.46877168353535187'}, {x: '0', y: '0', length:'0'}, 'false', 'line');
   const properties= createPropertiesFlechas(COLOR_AMARILLO,"0","bottom","false",{x:"0",y:"2",length:"2"},{x:"0.4999999999999997",y:"-1.372857004936771519",length:"0.4999999999999997"},{x:"910",y:"0",length:"910"},"false","line")
    //const controlFlecha = createControl(i.toString(),"79","1", propiedades, "Arrow", "2",  centro_X.toString(), "150", "1", "80");
    const controlFlecha = createControl("0","2","910",properties,"Arrow","910","0","0","0","2") 
    
    const componente = createComponent("166")
    
    return controlFlecha;
}