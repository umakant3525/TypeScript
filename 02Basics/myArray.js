var myArray = [1, 2, 3];
myArray.push(4);
myArray.push(4);
myArray.push(4);
myArray.push(4);
console.log(myArray[6]); // This will log 4
var myHeros = ["ram", "sham", "sita"];
myHeros.push("geeta");
console.log(myHeros[3]);
var allUser = [];
allUser.push({
    name: "umakant",
    roll: 65,
});
allUser.push({
    name: "ruturaj",
    roll: 68,
});
console.log("All users:", allUser);
console.table(allUser);
