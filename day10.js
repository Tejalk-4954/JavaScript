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



