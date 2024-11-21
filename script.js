
//printing statement 

// console.log()

console.log(10)

// two ways to print :

// 1 - Terminal - node(file name)
// 2 - Extension - code runner  



//syntax :

// variable - a container to save the values

//variable_type variable_name = value
//console.log(variable_name)

var sugarbox = "sugar"
console.log(sugarbox);

// in js we use variable names to get the vaules stored in it with 
// help of console unlike java. we use control + s to save the code only after saving we can run it. it will show white dot on top to indicate unsaved code.


const sugarboxs = "sugar"
console.log(sugarboxs);


//var
var a = 10  // redeclaration
var a = 5
console.log(a);

//var
var a = 10  
     a = 5 // reassign 
console.log(a);

// in js if we assign two values to same variable only last value will be printed it is called redeclaration 
// if we remove var and just assign two value it will print the second value it is called reassign



// let :

//let b = 10 // it cant redeclare
//let b = 5
//console.log(b);

//let b = 10 
   // b = 5 // it will reassign
//console.log(b);

// let cannot redeclare and show error but will allow reassign


// const 

//const c = 10 // cannot redeclare 
//const c = 5 
//console.log(c);

//const c = 10 // cannot redeclare 
//      c = 5  // cannot reassign
//console.log(c);

//const cannot redeclare and reassign


// variable types 

// 1 - var - very adjustable
// 2 - let - slightly adjustable
// 3 - const - not adjustable

//datatypes :

// primitive datatypes

//string - " " inside double quotes anything is string
// number - normal and decimal 
//boolean - true  or false 
//null 

var n = null
console.log(n);

//undefined - let cannot use undefined 

var t
console.log(t);



// non primitive datatype

// array - []

var arr = ["hello", "how r u", "you", "can "]
console.log(arr);

var arr = ["hello", "how r u", "you", "can "]
console.log(arr [3]);

//length : starts with 1 (based on give series of things
//index : starts with 0 

// in array we can give multiple datatypes in single storage


//object- {} - collection of key and value pairs
// need to give comma inbetween keys
var obj = {

    name : "khi",
    age : 27,
    std : "v"

}

console.log(obj);
// object - collection key and value pairs
var obj ={
    name : "kia",
    age : 20
}

// to update the valies
obj.name = "khiya"
obj.age = 15
console.log(obj);

// to get the values from the obj
// console.log(obj.name);
//console.log (obj.age);

///nested array and object :

var sclobj = [
    {
        name : "ki",
        age : 27,
        std : "x"
    }, // here we need to put comma to make it array
    { 
        name : "kia",
        age : 27,
        std : "x"

    },

    {
        name : "kiaa",
        age : 27,
        std : "x"
    }


]
console.log(sclobj[1].name); // we use this to call specific index

// to get keys alone from the object

var obj = {
    name : "kia",
    age :27
}

let keys = object.keys(obj)
console.log(keys);

let val = object.values(obj)
console.log(val);

// task - nested array and obj - ofc [ 3 employee data] -- 
//2nd data name and role [update] - 3rd data keys and values


// object destructuring 

