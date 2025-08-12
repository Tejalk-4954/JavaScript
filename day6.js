//create object 
//1.by literal

  // object is a collection of key value pair.
let city={
 name:"mumbai",
 pin:422101
};

//2.empty object
let city1={};

//3.create object with function and constructor

function student(id,name,email)
{
    this.id=id;
    this.name=name;
    this.email=email;
}

//4.using new keyword
let car=new Object();
car.carname="audi";
console.log(car);

//delete property 
let obj ={
    name:"Abc",
    email:"abc@gmail.com",
    age:30
}

console.log(delete obj.email);
;
console.log(obj);

