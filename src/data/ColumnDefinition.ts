export class ColumnDefinition {
    constructor(public name:string, public unit: string, public description:string) {
    }

    public static fromDTO(obj: Object) {
        return new ColumnDefinition(obj["Name"],obj["Unit"], obj["Description"]);
    }
}