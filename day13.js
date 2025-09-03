
const prom=fetch("https://dummyjson.com/todos");

prom.then((v)=>
{
    return v.json();

})
.then((v)=>
{
  
  console.log(v);
    
  let data=new Array (v.todos);

  data.forEach((i)=>
{
    i.forEach((j)=>{

        if(j.completed==true){
            console.log(j);
            console.log("******************************************");
            
            
        }
    })
})
    
})
.catch((e)=>
{
    console.log(e);
    
})