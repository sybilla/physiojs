export class FileWideLabel {
    constructor(
        public position: Date, 
        public type: "Flag" | "Circle" | "Line",
        public description: string) {
    }

    public static fromDTO(obj: Object) {
        return new FileWideLabel(new Date(obj["Position"]), obj["Type"], obj["Description"]);
    }
}