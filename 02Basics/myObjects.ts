// const User = {
//     name: "umakant",
//     email: "umakant@123",
//     isAvtive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "umakant", isPaid: false, email: "umakant@gmail.com"}

// createUser(newUser)

// // throws an error becuse email tyep is not present 
// // createUser({name: "umakant", isPaid: false, email: "umakant@gmail.com"})

// // when funcation return objects 
// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }


// type Man = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function createMan(Man:Man): Man{
//     return {name: "", email: "", isActive: true}
// }

// createMan({name: "", email: "", isActive: true})


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "1245",
    name: "uma",
    email: "uma@h.com",
    isActive: false
}

myUser.email = "h@gmail.com"
// myUser._id = "asa"

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string; //  e.g., 'YYYY-MM-DD'
}

type cardDetails = cardNumber & cardDate & {
    cvv: number; 
}

// Creating a new card details object
let newCardDetails: cardDetails = {
    cardnumber: "u12b3n",          
    cardDate: "2002-10-10",   
    cvv: 123456                    
};

console.log(newCardDetails);





export {}