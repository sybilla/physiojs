import {Metadata} from "./Metadata";
import {FileWideLabel} from "./FileWideLabel";
import {Series} from "./Series";

export class PhysioDocument {
    public metadata: Metadata;
    public fileWideLabels: FileWideLabel[];
    public series: Series[];

    constructor(data: string) {
        var obj = JSON.parse(data);
        this.metadata  = Metadata.fromDTO(data["Metadata"]);
        this.fileWideLabels = (data["FileWideLabels"] as Object[]).map(FileWideLabel.fromDTO);
        this.series = (data["Series"] as Object[]).map(Series.fromDTO);
    }
}