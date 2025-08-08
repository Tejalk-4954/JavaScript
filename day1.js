//javascript use to interact with browser.
//Everything in java is object
var name="jonny";
console.log(name);
console.log("String"+1+1);//String+anything it  is concat with string
console.log(1+1+"a");//number + string it perform operation with number then concat the string
console.log(1+2+3+"abcd"+4+5+6);//number perform the operation when String concat then numbers after string are also cancat they dont perform any operation
console.log("************************************************************************************");


var city;
console.log(city); // if we doesnt assign value to the variable then it has undefined value.
console.log(city+1);//if we perform any operation on undefined value variable then it has NAN {not a number} 
console.log(city+"pune");//undefined + String =undefinedString  it concat the string



console.log("************************************************************************************");

var age=null;
console.log(age);//null
console.log(age+1);//null+any number or any operation perform with null then it take value of null as zero.
console.log(null+"NOT");//null+string it concat the string only in case of number it perform operation.
console.log("35"+age);//35null
console.log(city+age);//undefined + null=NAN / null + undefined=NAN



console.log(typeof(age));//type of any null value variable is "object"
console.log(city); //type of any undefined value variable is "undefined".
console.log(typeof(name)); //type of name is String
console.log(typeof(34));//type of 34 is number










