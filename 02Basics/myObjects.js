"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "umakant",
    email: "umakant@123",
    isAvtive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "umakant", isPaid: false, email: "umakant@gmail.com" };
createUser(newUser);
// throws an error becuse email tyep is not present 
// createUser({name: "umakant", isPaid: false, email: "umakant@gmail.com"})
// when funcation return objects 
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createMan(Man) {
    return { name: "", email: "", isActive: true };
}
createMan({ name: "", email: "", isActive: true });
