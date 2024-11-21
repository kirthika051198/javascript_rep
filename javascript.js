// object destructuring in javascript allows you to extract multiple properties 
//from an object and assign them to variables in a concise and readable way,
// enhancing code reability and reducing repitition.



//var obj = {

  //  name : "kia",
    ///age : 27,
    //std : "x",

//}

//const {name, age, std } = obj
//
//console.log(name,age,std);


//setimeout function

//setimeout ( ()=>{
    //console.log("hello im js");

//},3000)



var empobj = [
    {
        name : "ki",
        age : 27,
        dep : "it"
    }, 
    { 
        name : "kia",
        age : 27,
        dep : "sales"

    },

    {
        name : "kiaa",
        age : 27,
        dep : "acc"
    }

]
empobj.name = "kii",
empobj.age = "26",
empobj.dep = "nonit"
console.log(empobj);

let keys = object.keys(empobj[3])
console.log(keys);

let val = object.values(empobj[3])
console.log(val);




//this keyword
const obj = {
    name : "hari",
    age :12,
    age :13,
    det : function(){
        console.log(this.age);
    }
}

console.log(obj);
obj.det()
