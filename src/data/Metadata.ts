export class Metadata {
    constructor(
        public setupName: string,
        public formatVersion: string,
        public additionalData: Object,
        public id: string,
        public timestamp: Date,
        public setupId: string) {
    }

    public static fromDTO(obj:Object) {
        return new this(
            obj["SetupName"], 
            obj["FormatVersion"], 
            obj["AdditionalData"],
            obj["SetupName"], 
            new Date(obj["Timestamp"]), 
            obj["SetupId"]);
    }
}