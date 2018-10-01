export class ColumnDefinition {
    constructor(
        public name:string, 
        public unit: string, 
        public description:string,
        public tranformation: Object) {
    }

    public static fromDTO(obj: Object) {
        let formattedUnit: string = null;
        if (obj["Unit"])
            formattedUnit = obj["Unit"].toString() == '?S' ? 'μS' : obj["Unit"];
        return new ColumnDefinition(
            obj["Name"],
            formattedUnit, 
            obj["Description"],
            obj["Transformation"]);
    }
}