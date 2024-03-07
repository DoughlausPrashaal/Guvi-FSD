//OOPS
//Factory functions
// return an objects
function createToy(name, dia, type, color, wrapper) {
    return {
      name,
      dia,
      type,
      color,
      wrapper,
      buildToy: function () {
        console.log(`
      Start Manufacturing ${name}
      Head is builing for ${dia} diameter
      Body type is build for ${type} Body
      Color of the toy is assigened to be ${color}
      packing the toy in ${wrapper}
     `);
      },
      info: function () {
        console.log(`I'm, ${name}, I was build in createtoy method`);
      },
    };
  }
  
  const toy1 = createToy("Toy1", "50cm", "Cone", "red", "box");
  const toy2 = createToy("TOY2", "60CM", "Sqaure", "blue", "Cone");
  
  console.log(toy1);
  console.log(toy2);
  toy1.buildToy();
  toy1.info();
  toy2.buildToy();
  toy2.info();

//This Keyword
const obj = {
    land : "Land Owned by Grandfather",
    getLand: function (){
        console.log(this.land)
    },
    innerObj :{
        land : "Property owned by father",
        getLand : function(){
            console.log(this.land)
        },
        // Targets only the global object 
        getDetails : () =>{
            console.log("Inner Obj1",this)
        },
        // Targets Immeadiate Parent
        getDetailsin() {
            const arrowfunc = () =>{
                console.log("InnerObject 2",this)
            }
            arrowfunc()
        },
    },
};

console.log(obj)
obj.getLand();
obj.innerObj.getLand();
console.log("Global Window",this)
obj.innerObj.getDetails();
obj.innerObj.getDetailsin();

//constructor functions
// Create an object {}
function Product(name,price,type){
    this.product_name = name
    this.product_type = type
    this.product_price = price
    this.getDetails = function (){
        console.log(`
        Product Name : ${this.product_name}
        Product Type : ${this.product_type}
        Product Name : ${this.product_price}
        `)
    }

}

Product.prototype.getPname = function(){
    console.log("Product Name :",this.product_name)
}

const HpLaptop = new Product("HP53",50000,"Electronics");
console.log(HpLaptop)
HpLaptop.getDetails();
HpLaptop.getPname();

class Guvi {
    //Encapsulation
    constructor(batch, topic, mentor, time, task) {
      // {}
      //Polymorphism
      this.batch = `FSD${batch}WD2`;
      this.topic = topic;
      this.mentor = mentor;
      this.time = time;
      this.task = task;
    }
    //Abstraction
    getTaskPercentage() {
      let taskpercentage = (this.task * 100) / 67;
      console.log("Task percentage ", taskpercentage.toFixed(2));
    }
    getBatchDetails() {
      console.log("The batch info is", this.batch);
    }
    getTodayTopic() {
      console.log("The Topic info is", this.topic);
    }
    getOverALlDetails() {
      console.log(`
         Batch : ${this.batch}
         Topic :  ${this.topic}
         Mentor : ${this.mentor}
      `);
    }
  }
  
const todaySession = new Guvi(57, "OOPS", "Sanjay", "8.10", 60);
console.log(todaySession);
todaySession.getTaskPercentage();

  //Inheritance
class Student extends Guvi {
constructor(batch, topic, mentor, time, task, name, course) {
    super(batch, topic, mentor, time, task);
    this.student_name = name;
    this.student_course = course;
}
getStudentInfo() {
    console.log(`
    StudentName : ${this.student_name}
    StudentCourse : ${this.student_course}
    `);
}
}

const prashaal = new Student(57, "OOPS", "Sanjay", "8.10", 60, "Prashaal", "MERN");
console.log(prashaal);
prashaal.getStudentInfo();
prashaal.getTodayTopic();