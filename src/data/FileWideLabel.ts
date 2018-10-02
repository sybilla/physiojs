export class FileWideLabel {
    constructor(
        public position: Date, 
        public type: "Flag" | "Circle" | "Line",
        public description: string) {
    }

    public static fromDTO(obj: Object, date: Date) {
        var t = date.getTime();
        var pos = new Date(t + obj["Position"] * 1000);
        return new FileWideLabel(pos, obj["Type"], obj["Description"]);
    }
}