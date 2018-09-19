import {Metadata} from "./Metadata";
import {FileWideLabel} from "./FileWideLabel";
import {Series} from "./Series";

export class PhysioDocument {
    public metadata: Metadata;
    public fileWideLabels: FileWideLabel[];
    public series: Series[];
    public refTime: Date;

    constructor(data: string) {
        var obj = JSON.parse(data);
        this.refTime = new Date(obj["ReferenceTime"]);
        this.metadata  = Metadata.fromDTO(obj["Metadata"]);
        this.fileWideLabels = (obj["FileWideLabels"] as Object[]).map(FileWideLabel.fromDTO);
        this.series = (obj["Series"] as Object[]).map(x => Series.fromDTO(x, this.refTime));
    }
}