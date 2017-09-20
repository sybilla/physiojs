export class FileWideLabel {
    constructor(
        public position: number, 
        public type: "Flag" | "Circle" | "Line",
        public description: string) {
    }

    public static fromDTO(obj: Object) {
        return new this(obj["Position"], obj["Type"], obj["Description"]);
    }
}