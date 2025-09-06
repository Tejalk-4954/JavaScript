let str="city";

console.log(typeof(str));

console.log(str.at(2));//at  gives the  charecter at specific index

console.log(str.charAt(1));//gives the  charecter at specific index

console.log(str.charCodeAt(1));//charcodeAt  gives the ascii value of that index charecter
console.log(str.charCodeAt());//if we doesnt provide any index then the it gives 0th index asciii value


let str2="learn java";
console.log(str2.slice(3));//same as array method
console.log(str2.slice(2,5));

console.log(str2.substring(1,4));//same as  slice 
console.log(str2.substr(1,4));//substr includes both start and end index

let str3="javascript";
console.log(str3.toUpperCase());
console.log(str3.toLocaleUpperCase);

console.log(str3.toLowerCase());
console.log(str3.toLocaleLowerCase);

let str4="unique system skills";
console.log(str4.toUpperCase());

console.log(str.concat(str3,str4));



let msg="   aarushi   ";

console.log(msg+"hi");
console.log(msg.trim()+"hey");//remove spaces
console.log(msg.trimStart(),"by");//remove start space
console.log(msg.trimEnd(),"hello");//remove ending space

let Stringg ="Dhanu";
console.log(Stringg.padStart(4,"*"));
console.log(Stringg.padEnd(10,"$"));


let stringg2="Apple";
console.log(stringg2.repeat(4));//repeats the string for n time
console.log(stringg2.repeat(0));
console.log(stringg2.repeat(10));


