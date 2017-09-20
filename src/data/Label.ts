export class Label {
    constructor(
        public position: number[], 
        public type: "Flag" | "Circle" | "Line",
        public description: string) {
    }

    public static fromDTO(obj: Object) {
        return new Label(obj["Position"], obj["Type"], obj["Description"]);
    }
}