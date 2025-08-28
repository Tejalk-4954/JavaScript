//Asynchronous  programming in js
//1.settimeout(handler,time)\

// setTimeout(print,1000);

function print()
{
    flag=true;
    console.log("print something....");
    
    if(flag==true)
{
    clearTimeout(timer);
}

}

console.log("hello");
console.log("byeee");


//2.clearTimeout()
let timer=setTimeout(print,1000);
flag=false;

//clear timeout clear settimeout


//3.setInterval

function greet()
{
    console.log("great day!!");
    
}
setInterval(greet,1000);//after that specific time the greet function is called


//4.clearInterval
let count=1;

function demo()
{
    console.log("hello from demo");
    count++;

    if(count>5)
    {
        clearInterval(interval1);
    }
    
}

let interval1=setInterval(demo,2000);