interface TextArea{
    color: string;
}

interface Label{
    size: string;
    text: string;
}


interface Control {
    ID: string;
    h?: string;
    measuredH: string;
    measuredW: string;
    properties:  TextArea | Label ;
    typeID: string;
    w: string;
    x: string;
    y: string;
    zOrder: string;
}


interface Controls {
    control: Control[];
}

interface Children {
    controls: Controls;
}

interface Component {
    ID: string;
    children: Children;
    h: string;
    measuredH: string;
    measuredW: string;
    properties: { [key: string]: string };
    typeID: string;
    w: string;
    x: string;
    y: string;
    zOrder: string;
}

export function createTextArea(color: string): TextArea {
    return {
        color
    };
}

export function createLabel(size: string, text: string): Label {
    return {
        size,
        text
    };
}

export function createControl(
    ID: string,
    
    measuredH: string,
    measuredW: string,
    properties : TextArea | Label,
    typeID: string,
    w: string,
    x: string,
    y: string,
    zOrder: string,
    h?: string,
): Control {
    return {
        ID,
        h,
        measuredH,
        measuredW,
        properties,
        typeID,
        w,
        x,
        y,
        zOrder
    };
}


export function createComponent(
    ID: string,
    h: string,
    measuredH: "46",
    measuredW: "200",
    controlName: string,
    controls: Control[],
    w: string,
    x: string,
    y: string,
    zOrder: string
): Component {
    return {
        ID,
        children: {
            controls: {
                control: controls
            }
        },
        h,
        measuredH,
        measuredW,
        properties: { controlName },
        typeID: "__group__",
        w,
        x,
        y,
        zOrder
    };
}

const textArea = createTextArea("16776960");
const control0 = createControl("0","140","200", textArea, "TextArea", "124", "0", "0", "0", "46");

const label = createLabel("12", "Nombre");
const control1= createControl("1","25","68", label,"Label","88","24","11","1")

export const componentes = createComponent("0", "46", "46", "200", "Nombre", [control0, control1],"200", "370","3000",  "100");

//modifiedJson.mockup.controls.control[modifiedJson.mockup.controls.control.length] = componentes;
