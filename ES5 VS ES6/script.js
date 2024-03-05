// var let and const
// re declaration and re initialization
// is possible
var a = 15
var a = 25
console.log(a)

//let 
let b = 13
// let b = 15; // not possible (re declaration)
b  = 15 // re initialization is possible
console.log(b)

// const 
const c =30;
// const c = 25  not possible re declaration
// c = 35 re initialization not possible
console.log(c)

// block scope (let and const)

if(true){
    var x = "sanjay"
    console.log("inblock",x)
}

console.log("outblock",x)
// let const - cannot be accessed outside the block
// var can be accessed outside the block 

if (true){
    let xyz = 30
    //console.log(zyx) inner to outer 
    if (true){
        let zyx = 15
        console.log("Inner block",xyz)
    }
}

function scopefunc(){
    let func_var = 36;
    // console.log(func_var) // inner to outer error
    if(true){
        //let func_var = 36
        console.log(func_var)
    }
}

scopefunc();

if (true){
    const shadow_var = "sanjay"
    if (true){
        const shadow_var = "subash"
        console.log("sub block" , shadow_var)
    }
    console.log("san block", shadow_var)
}


//spread and rest operator
const col_arr = ["mango" , 5 ,"chocolate","milk"]
console.log(col_arr)
console.log(...col_arr)

const batch1 = ["sanjay", "ragul"];
const batch2 = ["keni","raja"];
const batch3 = ["prashaaal","Subash"]
const allStudents = [...batch1,...batch2,...batch3];
console.log(allStudents)

function getAllData(data1,data2,...all){
    console.log(data1)
    console.log(data2)
    console.log("remaining data",all)
}

getAllData("san","sam","pras","raj","sub")

//Array Destructuring 
const studArr = ["subash","sanjai",["aravind","prashaal"]]
console.log("-----normal structure-----")
console.log(studArr)
console.log(studArr[0])
console.log(studArr[1])
console.log("-----destructure-----");
const [name1, ,[name3,name4]] = studArr
//[name1, ,name3]= ["subash","sanjai",["aravind","prashaal"]]
//name1 = subash
// , ,= sanajai
//[name3,name4] = ["aravind","prashaal"]
console.log(name1)
console.log(name3)
console,log(name4)

//Object destructurting
const data = {
    firstName: "sanjay",
    lastname :"guvi",
    pos : "mentor",
    loc: "chennai",
    company :{
        loc:"chennai",
        country :"India",
        state :"Tamil Nadu"
    },
}
console.log("....normal structure");
console.log(data)
console.log(data.firstName,data.lastname)
const{
    firstName,
    pos,
    lastname:lName,
    company:{loc,state:comState,country},
} = data

console.log(firstName); //sanjay
console.log(pos); //mentor
console.log(lName); //guvi
console.log(loc); //chennai
console.log(comState); //tamil nadu (nested,renamed)
console.log(country); // India

//property shorthand
let batch = "FSF55WD2";
let Time = "8.00 AM"

const schedule = {
    topic : "ES6 JS",
    batch,
    time:Time
};
console.log(schedule)

//Template literals
const greet = "how are you"
const yourSelf = "I am student in guvi";
const totalGreetMsg = "hi" + greet + " " + yourSelf
const templateStr = `Hi
${greet}
${yourSelf}
`;
console,log(totalGreetMsg)
console.log(templateStr)