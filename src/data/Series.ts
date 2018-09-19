import {ColumnDefinition} from "./ColumnDefinition";
import {Label} from "./Label";
import {Device} from "./Device";

export class Series {
    constructor( 
        public id:string,
        public name:string,
        public columnDefinitions : ColumnDefinition[],
        public labels: Label[],
        public startTime: Date,
        public data: number[][],
        public device: Device) {
    }

    public static fromDTO(obj:Object, refTime: Date) {
        return new Series(
            obj["Id"], 
            obj["Name"], 
            (obj["ColumnDefinitions"] as Object[]).map(ColumnDefinition.fromDTO),
            (obj["Labels"] as Object[]).map(Label.fromDTO),
            refTime,
            obj["Data"],
            Device.fromDTO(obj["Device"])
        );
    }

    getFormatted() : any[][] {
        var t = this.startTime.getTime();
        return this.data.map(x=> {
            var y = x.slice() as any[];
            y[0] = new Date(t + x[0] * 1000);
            for (var i =1;i<y.length;i++) {
                if (y[i] == "NaN") {
                    y[i] = Number.NaN;
                }
             }
            return y;
        });
    }
}