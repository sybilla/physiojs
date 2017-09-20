export class Device {
    constructor(public id:string, public name: string, public sensor: string, public channel:string) {
    }

    public static fromDTO(obj: Object) {
        return new Device(obj["Id"], obj["Name"], obj["Sensor"], obj["Channel"]);
    }
}