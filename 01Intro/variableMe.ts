// string 
let greetings: string = "Hello umakant welcome to the typescript hub.";
console.log(greetings);

// greetings = 10  #Type 'number' is not assignable to type 'string'.ts(2322)
console.log(greetings.toLocaleLowerCase());
console.log(greetings.length) ;

 // number

 let useId: number = 1234 ;
 console.log(useId);
 console.log(typeof(useId));


 let useId2 = 1234 ;
 console.log(useId2);
 console.log(typeof(useId2));


 // boolean 

 let isLoggedIn: boolean = true ;
 console.log(isLoggedIn) ;
 console.log(isLoggedIn.valueOf())

 // any 
 let hero ;
 function getHero1 (){
    return "My Hero ";
 }

 function getHero2 (){
    return true;
 }

 hero = getHero1() ;
 console.log(hero)
 console.log(typeof(hero))



 hero = getHero2() ;
 console.log(hero)
 console.log(typeof(hero))

export {}