

// TODO: Add more colors and conditions
// TODO: Adaptarlo para cada uno de las posibilidades
/**
 * ! TENER EN CUENTA
 * * IMPORTANTE LOS COLORES NO ESTAN EN HEXADECIMAL #, estan en DECIMAL!!!
 * * pagina para hacer los cambios https://www.mathsisfun.com/hexadecimal-decimal-colors.html
 * */


// Change colors in the JSON based on text content
export function changeColors(json: any, puesto: string): any {
  //LABEL PARA EL TEXTO
  // Check if the JSON object has the expected structure
  if (!json || !json.mockup || !json.mockup.controls || !json.mockup.controls.control) {
      console.error('Invalid JSON structure. Unable to change colors.');
      return json; // Return the original JSON object
  }

  // Create a deep copy of the original JSON
  const modifiedJson = JSON.parse(JSON.stringify(json));
  console.log(modifiedJson);

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
            innerControlTextArea.properties.color = color; //Para modificar el color del cuadrado
          }
    }
});

  return modifiedJson;
}

const COLOR_GRIS= '8421504';
const COLOR_NEGRO= '0';
const COLOR_VERDE= '248890';
const COLOR_LKS = '16275712';
const COLOR_BLANCO= '16777215';
const COLOR_ROJO = '16711680';

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
  


/**  export async roadmapCategorias(resourceId: string){


}*/
