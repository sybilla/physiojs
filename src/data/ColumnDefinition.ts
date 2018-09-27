export class ColumnDefinition {
    constructor(
        public name:string, 
        public unit: string, 
        public description:string,
        public tranformation: object) {
    }

    public static fromDTO(obj: Object) {
        return new ColumnDefinition(
            obj["Name"],
            obj["Unit"], 
            obj["Description"],
            obj["Transformation"]);
    }
}