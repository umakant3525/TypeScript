// class User {
//     name : string 
//     email : string 
//     city : string = "pune"
//     constructor(name : string , email : string){
//         this.name = name
//         this.email = email
//     }
// }
// const myuser  = new User("umakant" ,"umakant@123")
// console.log(myuser)
// console.log(myuser.city)
// class User2 {
//     private name : string 
//     readonly email : string 
//     public  city : string = "nanded"
//     constructor(name : string , email : string){
//         this.name = name
//         this.email = email
//     }
// }
// const myuser2  = new User2("uma2" ,"uma2@3525")
// // console.log(myuser2.name)  //Property 'name' is private and only accessible within class 'User2'.ts(2341)
// console.log(myuser2.email)
// console.log(myuser2.city)
// smart coding 
var User3 = /** @class */ (function () {
    function User3(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
    }
    return User3;
}());
var myuser3 = new User3("uma2", "uma2@3525", 1234);
console.log(myuser3);
console.table(myuser3);
