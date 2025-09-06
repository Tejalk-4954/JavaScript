//lexical Scope/closure

function account()
{
   let bal=10000;

   function deposit(v)
   {
       bal=bal+v;
       console.log("updated balance is:"+bal);
       
   }

   function withdraw(v)
   {

    if(bal<v)
    {
        console.log("insufficient balance");  
    }
    else{
     bal=bal-v;
     console.log("withdraw amount:"+v);
     console.log("balance after withdraw:"+bal);
    }
   }

   function returnbalance()
   {
    console.log("balance::"+bal);
    ;
   }

   return [deposit,withdraw,returnbalance];
}

let [deposit,withdraw,returnbalance]=account();
deposit(4000);
withdraw(2000);
returnbalance();

deposit(2000);
