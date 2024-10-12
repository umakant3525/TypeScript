abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        //some complex calculation
        return 8
    }
}
class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter)
        }

        getSepia(): void {
            console.log("Sepia");
            
        }
}

const hc1 = new Instagram("test1", "Test", 3)
const hc2 = new Instagram("test2", "Test", 3)
const hc3 = new Instagram("test3", "Test", 3)


console.log(hc1)
console.log(hc2)
console.log(hc3)

console.log(hc1.getReelTime()); // Output: 8
