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

//OBJECT METHODS
//1.object.assign(target,source)

let bank={};
let bank2={

    name:"idfc",
    branch:"nashik"
}

let bank3={
    accType:"saving",
    balance:40000
};
Object.assign(bank,bank2);//assign used to copy the object into target object
Object.assign(bank,bank3);//you can add multiple sources 
console.log(bank);


//2.object.create(object name)

let hospital={
    name:"civil",
    city:"pune"
}

let hospital2 = Object.create(hospital);//create use a new object from another object
console.log(hospital2);

// hospital2.city="mumbai";
console.log(hospital2);

//3.object.freeze(object name)

Object.freeze(hospital);//freeze use to make object immutable,you are not add the new property and cant change it

//4.isfrozen()

console.log(Object.isFrozen(hospital));//it give true or false 

//5.seal()

let objj={
    id:1,
    name:"abc"
}

objj.id=3;
Object.seal(objj);//seal allow you to modify existing property but it wont allow you to add new property
objj.city="pune";
console.log(objj);

//6.isSealed()

console.log(Object.isSealed(objj));//return true or false


//7.entries()

console.log(Object.entries(objj));//enteries returns the key value pair of object in the format of an array


//8.object.defineProperty(objectname,property,{descriptor})

let student1={

    name:"XYZ",
    roll_no:1
}

Object.defineProperty(student1,'marks',
    {
        value:88, //value  used to give value to property
        enumerable:true,//use to show property
        writable:true,//used to modify the value 
        configurable:true//used to delete property
    }
);

// console.log(student1);


//9.getOwnPropertyDescriptor()

console.log( Object.getOwnPropertyDescriptor(student1,'marks'));//it gives the descriptor of property

//10.defineProperties()

Object.defineProperties(student1,//used to add more properties at a time
    {
        "grade":
        {
            value:"A",
            writable:true,
            enumerable:true,
            configurable:true
        },
        "result":
        {
            value:"pass",
            enumerable:true,
            configurable:true,
            writable:true
        }
    }
);

console.log(student1);


//11.getOwnPropertyDescriptors(objectname)

console.log( Object.getOwnPropertyDescriptors(student1));