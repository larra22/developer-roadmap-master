import { createControl, createLabel, createPropertiesFlechas, createTextArea , createComponent, createMockUp, createGlobal} from "./estructuraJson";

const COLOR_GRIS= '8421504';
const COLOR_NEGRO= '0';
const COLOR_VERDE= '248890';
const COLOR_LKS = '16275712';
const COLOR_BLANCO= '16777215';
const COLOR_ROJO = '16711680';
const COLOR_AMARILLO = '16776960';


const centro_X=1000;
let principio_Y = 0;

function extructuraCorrectaJson(json: any): boolean{
    return json && json.mockup && json.mockup.controls && json.mockup.controls.control;
}



export function crearGrafico(listaCategoriasPrimerNivel:string[],  listaCategoriasSegundoNivel:[string,string][], subTercerNivel:[string,string][]){
    console.log('crear grtafico')
    console.log(subTercerNivel)


    const listaComponentesPrimerNivel = crearCuadrados(listaCategoriasPrimerNivel,listaCategoriasSegundoNivel, subTercerNivel,COLOR_AMARILLO);
   console.log(listaCategoriasSegundoNivel)

<<<<<<< HEAD
=======
    console.log(listaCategoriasPrimerNivel)
    let listaComponentesPrimerNivel = crearCuadradosPrimerNivel(listaCategoriasPrimerNivel);
>>>>>>> d773851 (falta por haer cosas)
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


    while (max>i){

        const flechaHorizontal= crearFlecaPrincipalHorizontal(i+10, principio_Y);
        listaFlechas.push(flechaHorizontal);
        const flechaVertical = crearFlechaVerticalIzquierda(i+20, centro_X);
        listaFlechas.push(flechaVertical);
        const textArea = createTextArea(COLOR_AMARILLO)

        const texto = listaTitulos[i];
        const label = createLabel("25", texto)

        const control1= createControl("1", "25","100",label,"Label","88","24","11","1")
        const control0 = createControl("0","200","400", textArea, "TextArea", "325", "0", "0", "0", "50");

        const componente = createComponent(i.toString(), "70", "46", "200",texto, [control0, control1],"121", centro_X.toString(), principio_Y.toString(),  "100");
<<<<<<< HEAD

        const hijos = crearCuadradosSegundoNivel(subcategorias, texto, COLOR_GRIS, principio_Y_primer_nivel, subTercerNivel);
        listaConComponentes.push(...hijos);
        console.log(hijos)
=======
        console.log(texto)
        listaConComponentes.push(componente);
        console.log(listaConComponentes)    
>>>>>>> d773851 (falta por haer cosas)
        i++;
        console.log(listaFlechas)
        principio_Y+=300;
    }

   // listaFlechas.concat(listaConComponentes);
    console.log(listaFlechas)
    return listaFlechas.concat(listaConComponentes);

}


function crearFlecaPrincipalHorizontal(i: number, coordenadaY: number){
    //Recudido a la mitad
    //const properties= createPropertiesFlechas(COLOR_ROJO,"0","bottom","false",{x:"0",y:"0",length:"0"},{x:"2",y:"20",length:"20"},{x:"2",y:"20",length:"20"},"false","line")
    //const controlFlecha = createControl(i.toString(),"2","10",properties,"Arrow","10",(coordenadaX/10).toString(),principio_Y.toString(),"1","2") 
    
   const properties= createPropertiesFlechas(COLOR_VERDE,"0","bottom","false",{x:"0",y:"0",length:"0"},{x:"50",y:"2",length:"50"},{x:"10",y:"2",length:"10"},"false","line")
    const controlFlecha = createControl(i.toString(),"2","10",properties,"Arrow","10","50",((principio_Y/10)+3).toString(),"1","2") 
    
    return controlFlecha;
}

function crearFlechaVerticalIzquierda(i:number, coordenadaX:number){

    const properties= createPropertiesFlechas(COLOR_ROJO,"0","top","false",{x:"0.5",y:"0",length:"0"},{x:"0",y:"0",length:"0"},{x:"0",y:"50",length:"6"},"false","line")
    const controlFlecha = createControl(i.toString(),"10","5",properties,"Arrow","2",(coordenadaX/20).toString(),"1","1","0.3") 

    
    return controlFlecha;
}