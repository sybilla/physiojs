export class FileWideLabel {
    constructor(
        public position: number, 
        public type: "Flag" | "Circle" | "Line",
        public description: string) {
    }

    public static fromDTO(obj: Object) {
        return new FileWideLabel(obj["Position"], obj["Type"], obj["Description"]);
    }
}