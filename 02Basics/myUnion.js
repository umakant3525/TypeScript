var score = 33;
score = 100;
console.log(score);
score = "hundred";
console.log(score);
var myclient;
myclient = {
    name: "user123",
    id: 1234
};
console.table(myclient);
myclient = {
    username: "user123",
    id: 1234
};
console.table(myclient);
// function getDBId(id : number | string){
//     console.log(id)
// }
getDBId(3);
getDBId("myid");
function getDBId(id) {
    console.log(id);
    if (typeof id == "number") {
        console.log(id + 2);
    }
    if (typeof id == "string") {
        console.log(id.toUpperCase());
    }
}
// array with union
var data1 = [1, 2, 3, 4];
var data2 = ["one", "two", "three", "four"];
var data3 = ["one", "two", "three", "four"];
var data4 = [1, 2, 3, 4];
var data5 = [1, "one", 2, "two", 3, "three", 4, "four"];
console.log(data1);
console.log(data2);
console.log(data3);
console.log(data4);
console.log(data5);
