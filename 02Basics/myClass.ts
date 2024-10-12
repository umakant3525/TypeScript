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

// class User3 {
//     constructor(public name : string , public email : string , private userId : number){
//     }
// }

// const myuser3  = new User3("uma2" ,"uma2@3525" ,1234)
// console.log(myuser3)
// console.table(myuser3)


class User {

    protected _courseCount = 1
    
    readonly city: string = "Jaipur"
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){
    }
    private deleteToken(){
        console.log("Token deleted");
        
    }
    get getAppleEmail(): string{
        return `apple${this.email}`
    }
    get courseCount(): number {
        return this._courseCount
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const hitesh = new User("h@h.com","hitesh")
// hitesh.name 
// hitesh.deleteToken()