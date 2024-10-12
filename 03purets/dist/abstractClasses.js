"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const hc1 = new Instagram("test1", "Test", 3);
const hc2 = new Instagram("test2", "Test", 3);
const hc3 = new Instagram("test3", "Test", 3);
console.log(hc1);
console.log(hc2);
console.log(hc3);
console.log(hc1.getReelTime()); // Output: 8
