//ARRAY-in js array is a collection of diffrent datatypes,no need to define the size of an array
let array=['a','b','c',12,undefined];
console.log(array);
console.log(array[0]);//accessing array elements using index

//function-is a reusable block of code,is an object
function demo()
{
    console.log("inside demo function");
    
}

demo();//call the function

function number(num1,num2,num3)//parametrs in function
{
    return num1+num2+num3;//returning function
}

console.log(number(12,8));//pass the arguments
console.log(number(11));//if we take a two parameters and pass only one value then it give output NAN
console.log(number("hi","hello"));//hihello
console.log(number("A",44));//A44
console.log(number("abc",321));//here we take the 3 parameters but pass only two values therefore it takes 3rd value undefined 
console.log(number(432,"vgh"));//432vghUndefined


//SCOPE
//1.function level scope
function demo1()
{
    var age=14;
    console.log(age);
    
}
//  demo1();
//  console.log(age);//we cannot log the age here bcoz it is define in the function it has  scope only for that function
 

//2.block level scope

if(true)
{
//    let num=111; //num with let has a block level scope dont access num outside the block
   
var num=111;//num with var has a block level scope but we can  access num outside the block

//    const num=111;//num with const has a block level scope dont access num outside the block
    console.log(num);
    
}

console.log(num);

//3.Global Scope-means can access in whole code
var city="pune";

function cities()
{
    console.log(city);
    
}

cities();


//HOSTING-is the concept in which youer function can access at anylevel of the page ,even top also,basically function floats to TOP
host();

function host()
{
    var name="PATRALEKHA";
    console.log(name);
    
}

//var ,let and const in which only  var can host but only variable name not the value
console.log(first);//undefined 
console.log(second);//error
console.log(third);//error



var first="1234"; 
let second="6758";
const third="0986";

student="aasha";//we can  declare  the variable without let,var or const
console.log(student);
