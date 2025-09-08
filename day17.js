//var shadowing

var car="mustang";
let carname="Audi";

function printcar()
{
   var car="wagnor";
   let carname="suzuki";
   console.log("functional::"+car);
   console.log("functional::"+carname);

   if(true)
   {
       carname="safari";
       carname="mercdese";
      console.log(carname);
      
      if(true)
      {

      }
     console.log("block::"+carname);
     
   }
   
   console.log("functional::"+carname);
   
}

printcar();
console.log(car);
console.log(carname);


