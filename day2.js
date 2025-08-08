//operators in js
//1.Arithmetic operators

console.log(1+1);//plus
console.log(22-2);//sunstraction
console.log(45/5);//division
console.log(20%10);//modulus
console.log(3*3);//multiplication
console.log(5**2);//exponention ,useed for power 
console.log("*****************************************************************************************");

//2.Assignment operator
var num=17;
num+=20;//+= is a assignment operatoor
console.log(num);

num-=30;//here num value take a 37 then 37-30=7
console.log(num);
console.log("*****************************************************************************************");


//3.comparison operators

let number=15;

console.log(number==166);//equal to used for comparing two variables,gives boolean values
console.log(number!=14);//not equal to,gives boolean values
console.log(10>12);//gives boolean values
console.log(10>=10);//true
console.log(10>10);//false
console.log(13<15);//true
console.log(13<=13);//true
console.log("************************************************************************");


//4.Logical




//Conditional StateMent

//1.If-else

var age=25;
if(age>=18)
{
    console.log("you can vote");    
}
else{
    console.log("you are not eligible ");    
}


//2.else if ladder

var money=200;

if(money>=100)
{
    console.log("rich"); 
}

else if(money==100)
{
    console.log("middle");
    
}

else{
    console.log("poor");
    
}

//3.switch case
var day=3; //always use break statement after case,defult case always use at the end of switch.

switch(day)
{
    case 1:
    console.log("it is  monday");    
    break;

     case 2:
    console.log("it is  tuesday");    
    break;

     case 3:
    console.log("it is  wednesday");    
    break;

     case 4:
    console.log("it is  thursday");    
    break;

     case 5:
    console.log("it is  friday");    
    break;

     case 6:
    console.log("it is  saturday");    
    break;

    default:
        console.log("it is weekend");
        break;
        
}
console.log("**************************************************************************************************");

var num1=20;
var num2=10;
var operator="+";

switch(operator)
{
    case "+":
         console.log(num1=num2);
         break;

    case "-":
            console.log(num1-num2);
                 break;

    case "*":
            console.log(num1*num2);             
            break;

    case "/":
           console.log(num1/num2);
           break;
           
    default:
        console.log("neigther of this");       

}





