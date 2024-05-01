import { createComponent, createControl, createLabel, createTextArea } from "./estructuraJson";

// TODO: Add more colors and conditions
// TODO: Adaptarlo para cada uno de las posibilidades
/**
 * ! TENER EN CUENTA
 * * IMPORTANTE LOS COLORES NO ESTAN EN HEXADECIMAL #, estan en DECIMAL!!!
 * * pagina para hacer los cambios https://www.mathsisfun.com/hexadecimal-decimal-colors.html
 * */

const COLOR_GRIS= '8421504';
const COLOR_NEGRO= '0';
const COLOR_VERDE= '248890';
const COLOR_LKS = '16275712';
const COLOR_BLANCO= '16777215';
const COLOR_ROJO = '16711680';

function extructuraCorrectaJson(json: any): boolean{
    return json && json.mockup && json.mockup.controls && json.mockup.controls.control;
}

//SEGUIR CON ESTO
// TODO : Corregir para que funcione correctamente
// TODO: Que los markdown se rellene corrcetamente tambien
// Meter de todo en la pase de datos
//TODO: Empezar con el esquema de Bea

export function changeTextoSegunListaBD(json: any, listaCategorias: string[]){
    if (!extructuraCorrectaJson(json) ){
        console.error('Invalid JSON structure. Unable to change colors.');
        return json;
    }

    const modifiedJson = JSON.parse(JSON.stringify(json));
    let limit = listaCategorias.length;
    let componentIndex= 0;
    let x=100,y=400, z=0;

    modifiedJson.mockup.controls.control.splice(0);
    while (limit > 0 ){
        
        //Habria que dejar solo las flechas pero mientras esto
        const categoria = listaCategorias[limit-1];

        const textArea = createTextArea(COLOR_BLANCO);
        const control0 = createControl("0","140","200", textArea, "TextArea", "124", "0", "0", "0", "46");

        const label = createLabel("12", categoria);
        const control1= createControl("1","25","68", label,"Label","88","24","11","1")

        const componentes = createComponent(componentIndex.toString(), "46", "46", "121", categoria, [control0, control1],"121", x.toString(), y.toString(),  "100");
        componentIndex++;
        x+=200;
        y+=400
        modifiedJson.mockup.controls.control[modifiedJson.mockup.controls.control.length] = componentes;
        
        limit--;
        
    }

    console.log(modifiedJson)

    return modifiedJson;
}

function determineTextByBD( nuevoTexto: string, innerControl: any){
    innerControl.properties.text = nuevoTexto;
}

// Change colors in the JSON based on text content
export function changeJson(json: any, puesto: string): any {
  if (!extructuraCorrectaJson(json) ){
      console.error('Invalid JSON structure. Unable to change colors.');
      return json;
  }

  const modifiedJson = JSON.parse(JSON.stringify(json));

  modifiedJson.mockup.controls.control.forEach((control: { children: { controls: { control: { properties: { text: string; color: string; }; }[]; }; }; }) => {
    if (control.children && control.children.controls) {
        // Accessing the second control element
        const innerControlLabel = control.children.controls.control[1];
        const innerControlTextArea = control.children.controls.control[0];
        //El cuadrado
        if (innerControlLabel && innerControlLabel.properties && innerControlLabel.properties.text && innerControlTextArea && innerControlTextArea.properties) {
            
            const text = innerControlLabel.properties.text;
            const color = determineColorByText(text, puesto);
            //innerControlLabel.properties.color = color; // Para modificar el color del texto
            //innerControlTextArea.properties.color = color; //Para modificar el color del cuadrado
          }
    }
});

  return modifiedJson;
}



const categoriaJunior = ['git', 'calidad', 'sonar', 'introduccion', 'continu'];
const categoriaSenior =['ansible', 'chef', 'puppet','grafana', 'terraform','aws'];
 function determineColorByText(text: string, puesto: string): string  {
    var cambiamos = false;
    var i =0;
    if(puesto.match('junior')){
        while (!cambiamos && i<= categoriaJunior.length ) {
            cambiamos = text.toLowerCase().includes(categoriaJunior[i]);
            i++;
        }
        return cambiamos ? COLOR_LKS : COLOR_GRIS;
    }else if(puesto='senior'){
        while (!cambiamos && i<= categoriaSenior.length ) {
            cambiamos = text.toLowerCase().includes(categoriaSenior[i]);
            i++;
        }
        return cambiamos ? COLOR_LKS : COLOR_GRIS;
    }else {
            return COLOR_ROJO;
    }
    
}



