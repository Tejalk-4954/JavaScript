
function counter()
{
   let count=1;

   function increase()
   {
        console.log(count);
        
         count++;

   }

   return increase;

}

let result=counter();
result();
result();
result();