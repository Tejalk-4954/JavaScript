//  const prom=new Promise((resolve,reject)=>
//   {   setTimeout(()=>{
//      let age=31;
//      if(age>40)
//         {
//             resolve("success");
//         }        

//         reject("Error");})
//  })

// prom.then((v)=>
// {
//     console.log(v);
    
// }
// ).catch((e)=>
// {
//     console.log(e);
    
// }
// ).finally(()=>
// {
//     console.log("done");
    
// },2000)

//promise methods
//1.promise.all

const prom1=Promise.reject(100);
const prom2=Promise.reject(1500);
const prom3=Promise.reject("invalid");

/*
promise.all  handles the operation that depends upon eachother 
it gives resolve values if all promises are resolve if anyone promise is also reject it give reject values*/

Promise.all([prom1,prom2,prom3]).then((v)=>
{
    console.log(v);
    
}).catch((e)=>
{
    console.log(e);
    
})



//2.promise.allSettled
/*
    allsettled gives array of  object it shows status and value and if promise rejected  then it shows status and reason. 

*/


setTimeout(()=>{

Promise.allSettled([prom1,prom2,prom3]).then((v)=>
{
   console.log(v);
}) },2000);



//3.promise.any()
/*
      promise.any  gives first resolve values  or if promises are rejected then it gave aggregate Error 
 */

Promise.any([prom1,prom2,prom3]).then((v)=>{

    console.log("from any::"+v);

    
}
  
  ).catch((v)=>{
console.log(v);

}
)

//4.promise.race()

/* promise.race will give first value of promise either rsolve or rejected */

setTimeout(() => {
    
Promise.race([prom1,prom2,prom3]).then((v)=>{
    console.log("from race::"+v);
    
}).catch((v)=>{console.log("from race"+v);
})

}, 1000);