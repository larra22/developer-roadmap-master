// To parse this data:
//
//   import { Convert, Roadmap } from "./file";
//
//   const roadmap = Convert.toRoadmap(json);

export interface Roadmap {
    mockup: Mockup;
}

export interface Mockup {
    controls:  MockupControls;
    measuredH: string;
    measuredW: string;
    mockupH:   string;
    mockupW:   string;
    version:   string;
}

export interface MockupControls {
    control: PurpleControl[];
}

export interface PurpleControl {
    ID:          string;
    h?:          string;
    measuredH:   string;
    measuredW:   string;
    properties?: TentacledProperties;
    typeID:      string;
    w:           string;
    x:           string;
    y:           string;
    zOrder:      string;
    children?:   PurpleChildren;
}

export interface PurpleChildren {
    controls: PurpleControls;
}

export interface PurpleControls {
    control: FluffyControl[];
}

export interface FluffyControl {
    ID:          string;
    measuredH:   string;
    measuredW:   string;
    properties?: FluffyProperties;
    typeID:      string;
    w:           string;
    x:           string;
    y:           string;
    zOrder:      string;
    h?:          string;
    children?:   FluffyChildren;
}

export interface FluffyChildren {
    controls: FluffyControls;
}

export interface FluffyControls {
    control: TentacledControl[];
}

export interface TentacledControl {
    ID:         string;
    measuredH:  string;
    measuredW:  string;
    properties: PurpleProperties;
    typeID:     string;
    x:          string;
    y:          string;
    zOrder:     string;
}

export interface PurpleProperties {
    color: string;
    icon:  Icon;
}

export interface Icon {
    ID:   string;
    size: string;
}

export interface FluffyProperties {
    size?:      string;
    text?:      string;
    color?:     string;
    align?:     string;
    bold?:      string;
    textColor?: string;
}

export interface TentacledProperties {
    color?:       string;
    curvature?:   string;
    direction?:   string;
    leftArrow?:   string;
    p0?:          P0;
    p1?:          P0;
    p2?:          P0;
    rightArrow?:  string;
    controlName?: string;
    shape?:       string;
    stroke?:      string;
    size?:        string;
    text?:        string;
}

export interface P0 {
    x:       number;
    y:       number;
    length?: number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toRoadmap(json: string): Roadmap {
        return JSON.parse(json);
    }

    public static roadmapToJson(value: Roadmap): string {
        return JSON.stringify(value);
    }

    public static toMockup(json: string): Mockup {
        return JSON.parse(json);
    }

    public static mockupToJson(value: Mockup): string {
        return JSON.stringify(value);
    }

    public static toMockupControls(json: string): MockupControls {
        return JSON.parse(json);
    }

    public static mockupControlsToJson(value: MockupControls): string {
        return JSON.stringify(value);
    }

    public static toPurpleControl(json: string): PurpleControl {
        return JSON.parse(json);
    }

    public static purpleControlToJson(value: PurpleControl): string {
        return JSON.stringify(value);
    }

    public static toPurpleChildren(json: string): PurpleChildren {
        return JSON.parse(json);
    }

    public static purpleChildrenToJson(value: PurpleChildren): string {
        return JSON.stringify(value);
    }

    public static toPurpleControls(json: string): PurpleControls {
        return JSON.parse(json);
    }

    public static purpleControlsToJson(value: PurpleControls): string {
        return JSON.stringify(value);
    }

    public static toFluffyControl(json: string): FluffyControl {
        return JSON.parse(json);
    }

    public static fluffyControlToJson(value: FluffyControl): string {
        return JSON.stringify(value);
    }

    public static toFluffyChildren(json: string): FluffyChildren {
        return JSON.parse(json);
    }

    public static fluffyChildrenToJson(value: FluffyChildren): string {
        return JSON.stringify(value);
    }

    public static toFluffyControls(json: string): FluffyControls {
        return JSON.parse(json);
    }

    public static fluffyControlsToJson(value: FluffyControls): string {
        return JSON.stringify(value);
    }

    public static toTentacledControl(json: string): TentacledControl {
        return JSON.parse(json);
    }

    public static tentacledControlToJson(value: TentacledControl): string {
        return JSON.stringify(value);
    }

    public static toPurpleProperties(json: string): PurpleProperties {
        return JSON.parse(json);
    }

    public static purplePropertiesToJson(value: PurpleProperties): string {
        return JSON.stringify(value);
    }

    public static toIcon(json: string): Icon {
        return JSON.parse(json);
    }

    public static iconToJson(value: Icon): string {
        return JSON.stringify(value);
    }

    public static toFluffyProperties(json: string): FluffyProperties {
        return JSON.parse(json);
    }

    public static fluffyPropertiesToJson(value: FluffyProperties): string {
        return JSON.stringify(value);
    }

    public static toTentacledProperties(json: string): TentacledProperties {
        return JSON.parse(json);
    }

    public static tentacledPropertiesToJson(value: TentacledProperties): string {
        return JSON.stringify(value);
    }

    public static toP0(json: string): P0 {
        return JSON.parse(json);
    }

    public static p0ToJson(value: P0): string {
        return JSON.stringify(value);
    }
}
