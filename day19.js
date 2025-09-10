//window global object

setTimeout(() => {
   
    // window.close;
}, 3000);

function popup()
{
  let v= window.alert("hey");

 let prom=window.prompt("enter age::");

 console.log("prompt  value::",prom);
 
 if(prom>18)
 {
    window.alert("eligible.. ");
 }
 else{
    console.log("not eligible");
    
 }
  

}

popup();