 const prom=new Promise((resolve,reject)=>
  {   setTimeout(()=>{
     let age=31;
     if(age>40)
        {
            resolve("success");
        }        

        reject("Error");})
 })

prom.then((v)=>
{
    console.log(v);
    
}
).catch((e)=>
{
    console.log(e);
    
}
).finally(()=>
{
    console.log("done");
    
},2000)