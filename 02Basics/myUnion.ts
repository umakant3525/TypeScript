let score: number | string = 33 ;

score = 100 
console.log(score)
score = "hundred"
console.log(score)

type User = {
    name : string ,
    id : number
}

type Admin = {
    username : string ,
    id : number
}

let myclient : User | Admin  ;

myclient = {
    name : "user123" ,
    id : 1234
}
console.table(myclient)

myclient = {
    username : "user123" ,
    id : 1234
}
console.table(myclient)

// function getDBId(id : number | string){
//     console.log(id)
// }
getDBId(3)
getDBId("myid")


function getDBId(id : number | string){
    console.log(id)

    if(typeof id == "number"){
        console.log(id+2)
    }
    if(typeof id == "string"){
        console.log(id.toUpperCase())
    }
}


// array with union

let data1 : number[] = [1,2,3,4] ;
let data2 : string[] = ["one", "two", "three", "four"]  ;
let data3 : number[]| string[] = ["one", "two", "three", "four"]  ;
let data4 : number[]| string[] = [1, 2, 3, 4]  ;
let data5 : (number| string)[] = [1, "one", 2, "two", 3, "three", 4,"four"]  ;
console.log(data1)
console.log(data2)
console.log(data3)
console.log(data4)
console.log(data5)


let sitting: "first" | "middle" | "last" ;

sitting = "first";
sitting = "last";
sitting = "middle";
// sitting  = "error"  //occiur error 


