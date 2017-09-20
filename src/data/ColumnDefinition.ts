export class ColumnDefinition {
    constructor(public name:string, public unit: string, public description:string) {
    }

    public static fromDTO(obj: Object) {
        return new this(obj["Name"],obj["Unit"], obj["Description"]);
    }
}