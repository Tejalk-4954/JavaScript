//ARRAY METHODS
//length property
 let array=[1,2,3,4,5,24,12];
 console.log(array.length);//gives length of an array
 console.log(array[4]);//accessing array element using index position
 
 //1.push
console.log("push operation perform::",array.push(10,11));//push add the element at the end of an array.
console.log(array);//push returns updated length of an array ,it is modifying method it changes the original array

//2.pop

console.log("removed:",array.pop());//pop remove the last element of an array ,it is also modifying the array
console.log(array);

//3.shift

console.log("shift element::",array.shift());//shift method remove first element of an array,modifying array
console.log(array);

//4.unshift

console.log("add element:",array.unshift(1));//unshift method add element at the first of array,it gives updated length of an array,modifying array
console.log(array);

//6.ForEach

let num=[10,20,30,40,53];
function oddeven(i)
{
    if(i%2==0)
    {
        console.log("even number");
        
    }
    else{
        console.log("odd number");
        
    }
}
num.forEach(oddeven);//foreach worked at element level and it returns element
console.log("***************************************************");

 
// //7.Map
num.map(oddeven);//map returns array,work at element level
console.log(num);
console.log("***********************************************");

let arr=[15,11,9,11,7];
function greatest(no)
{
    if(no>10)
    {
       return no;
    }
}

let arr2=arr.map(greatest);
console.log(arr2);
console.log("***********************************");

//8.FILTER

let arr3=arr.filter(greatest);//filters the data based on condition 
console.log(arr3);
console.log("*************************************");


//9.find
 
console.log( arr.find(greatest));//find returns the first element that trues the condition

//10.join
console.log(arr.join());//join use to join the element of an array, bydefault elements join by the comma if dont gives any special charecter
console.log(arr.join(" "));//here we give the space thats why elememts seperates by the space 

//11.includes
console.log(arr.includes(12));//includes use for seearching whether given element present in the array or not
console.log(arr.includes(15));//it always return either true or false

//12.flat
 let array1=[1,2,3,[4,5,[11]],6,[7,8,9],10];
 console.log(array1.flat(2));//flat use to flat the  nested array
 console.log(array1.flat(Infinity));//if we not known the depth then give the infinity
  
 //13.slice(start index , end index)

 let Strarray=['a','b','c','d','e','f'];//slice inclueds start index and excludes the end index
 let str1= Strarray.slice(1,4);
 console.log(str1);
 let str2=Strarray.slice(0,-1);//give negative index then it takes from last
 console.log(str2);
 
 //14.Splice(index number,no of deleting element,add new element)

 console.log(Strarray.splice(1,2,'B'));//splice modify the original array 
 console.log(Strarray);
 console.log("***********************************");
 

 //15.every
console.log( arr.every(greatest));//every check every elements satisfy the condition or not ,returns true or false

//16.some
console.log(arr.some(greatest));//it is opposite to every if anyone satisfy condition it returns true
console.log("****************************************");

//17.reduce
let array2=[1,2,3,4,5];
function add(num1,num2)
{
  num=num1+num2;
  return num;
}

console.log(array2.reduce(add));//reduce method used to reduce whole array into single output

 //18.CopyWithin(target index,start index, number )

 let Strarray1=['a','b','c','d','e','f'];
 console.log(Strarray1.copyWithin(1,0,3));//copywithin modify original array
 





