const name = "Prashaal"
console.log(name)
let a =1
let b =2
console.log("Started")
console.log(a+b)
console.log("done")

//Data Types

//Primitive Datatypes
//Number ->
console.log(typeof(5))

//String ->
console.log(typeof("5"))

//Boolean
console.log(typeof(true))

//None Primitive Datatypes

// Array
let arr = [1,2,3,4,5]

console.log(typeof(arr),arr)

//Object

let obj = {1:"1"}

console.log(typeof(obj),obj)


//deep copy

let ano_arr = [5,6,7]
let ano_arr2 = Object.assign([],ano_arr)
ano_arr2[1]  = 8 
console.log(ano_arr)
console.log(ano_arr2)