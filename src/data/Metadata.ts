export class Metadata {
    constructor(
        public setupName: string,
        public formatVersion: string,
        public additionalData: Object,
        public id: string,
        public timestamp: Date,
        public setupId: string,
        public additionalDataDescriptors: Object ) {
    }

    public static fromDTO(obj:Object) {
        return new Metadata(
            obj["SetupName"], 
            obj["FormatVersion"], 
            obj["AdditionalData"],
            obj["SetupName"], 
            new Date(obj["Timestamp"]), 
            obj["SetupId"],
            obj["AdditionalDataDescriptors"]);
    }
}