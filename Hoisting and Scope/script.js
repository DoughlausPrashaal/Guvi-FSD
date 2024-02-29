//Hoisting

// console.log(a) //undefined
// var a = 15
// console.log(a)


//  Every Javscript code runs two times. First time to allocate memeory second time to execute
// var runs the variable in global scope hence undefined 
// let and const stores the values in lexical scope before initialisation hence error 

//Array

let arr = ["prashaal",1,true ,{pos: "developer"}]
console.log(arr[0])
console.log(arr[3].pos)
//Objects
let obj = {
    name : "prashaal",
    value : 1,
    ismember : true,
    posarr : [1,"prashaal",true],
    demoobj : {
        pos : "developer",
        id : 5
    }
}

// dot operator
console.log(obj.value)
console.log(obj.posarr[2])
console.log(obj.demoobj.id)

// Map Operator

console.log(obj["ismember"])