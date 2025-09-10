//prototypal Inheritance

let person1={
    names:"tejal",
    city:"nashik",
    

    demo:function()
    {
        console.log(this.names+this.city+"hii");
        
    }
}
let person2={

    names:"kartiki",
    age:22
}

Object.prototype.demo=function()
{
    console.log("hii");
   
}

// person2.__proto__=person1;

let v=Object.setPrototypeOf(person1,person2);
console.log(v);



// person1.demo();
// person2.demo();
// console.log(person2);
// console.log(person1);


Array.prototype;

