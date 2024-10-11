let rgba: [number, number, number, number];
rgba = [1, 2, 3, 360];
console.log(rgba);

let myuser: [number, string, number];

// Assigning different values to myuser tuple
myuser = [1, "umakant1", 121];
console.log(myuser);

myuser = [2, "umakant2", 123];
console.log(myuser);

myuser = [3, "umakant3", 124];
console.log(myuser);

// Defining a tuple type for user
type user = [number, string];

// Creating a new user tuple
let newmyuser: user = [1122, "myname"];

// Modifying the first element
newmyuser[0] = 123432;
console.log(newmyuser);

// Another user tuple
let newmyuser2: user;
newmyuser2 = [22, "huhihoi"];
console.log(newmyuser2);


