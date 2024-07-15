//singleton

// object literals

const jsUser = {
    name: "raja",
    age: 18,
    email: "birlarajaa@gmail.com"
};

// console.log(jsUser.name);
// console.log(jsUser["email"]);



const tinderUser = new Object();

tinderUser.name = "birla";
tinderUser.age = 18;
tinderUser.email = "raja.birla2002@gmail.com";

//console.log(tinderUser);


// object of object 
// ( ?. ) called optional chaining


const regularUser = {
    email : "birlarajaa@gmail.com",
    fullName : {
        fistName : "raja",
        lastName : "birla"
    },
    address : "indore"
}
 

//console.log(regularUser.fullName.fistName);



// how to combine objects ?

const obj1 = {1 : "a", 2 : "b", 3 : "c"};
const obj2 = {4 : "a", 5 : "b", 6 : "c"};

//const obj3 = Object.assign({}, obj1, obj2)


const obj3 = {...obj1, ...obj2} // spread oprator 
// console.log(obj3);


// database values


const users = [
    {
        id : 1,
        name : "raja"
    },
    {
        id : 2,
        name : "raj"
    },
    {
        id : 3,
        name : "ra"
    },
    {
        id : 4,
        name : "r"
    },
    {
        id : 5,
        name : "rj"
    },
]

users[1].name
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
