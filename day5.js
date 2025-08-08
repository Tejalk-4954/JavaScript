//Loops
//for(Intialization;condition;updation/operation)

for(let v=1;v<=10;v++)
{
    console.log("hi::"+v);
    
}
console.log("********************************************");


//while(condition)

let num=1;
while(num<=10)
{
    console.log(num);
    num++;
}
console.log("************************************");


//dowhile
let num1=10;
do{
    console.log(num1);
    num1++;
    
}while(num1<20);//do while loop if false while it will execute alteast once 
console.log("****************************");

//for of

let array=[1,2,3,4,5];

for(let a of array)
{
    console.log(a);
    
}//gor of loop print elements of array
console.log("****************************");

//for in
let array1=[1,2,3,4,5];

for(let a in array)
{
    console.log(a);
    
}//for in loop print index of array elements