export class ColumnDefinition {
    constructor(
        public name:string, 
        public unit: string, 
        public description:string,
        public tranformation: Object) {
    }

    public static fromDTO(obj: Object) {
        let unit = null;
        if (obj["Unit"])
            unit = obj["Unit"].toString == '?S' ? 'μS' : obj["Unit"];
        return new ColumnDefinition(
            obj["Name"],
            unit, 
            obj["Description"],
            obj["Transformation"]);
    }
}