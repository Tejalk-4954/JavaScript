//Shadowing 

//let shadowing

let num=100;

function demo()
{
    let num=200;//let has a block level scope thats why its only give num=200 within that function
    console.log(num);
    
}

demo();
console.log(num);//but out of the function it gives the original value of num i.e num=100;
