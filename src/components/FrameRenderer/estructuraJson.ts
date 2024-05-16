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
    ID: "0"|"1",
    
    measuredH: "200"|"25",
    measuredW: "400" |"100",
    properties : TextArea | Label,
    typeID: "TextArea" | "Label",
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

