//spread operator

let arr1=[1,2,3,4,5];

let arr2=[6,7,8,9,10];

let arr3=[...arr1,...arr2];//... this dots are used for spread operator ,spread operator spread the elements of array or properties of object.

console.log(arr3);

let student={
    name:"ashish",
    rollno:12
};

let student2={
    city:"pune",
    email:"A@gmail.com"
}

let stud={...student,...student2};//here create one object using two objects property with the help of spread opeartor 

console.log(stud);



//rest operator

let bank={
    bank_name:"icici",
    branch:"nashik",
    ifsc_code:"ic123",
    acc_type:"saving"
};

let {bank_name,branch,...obj}=bank;//in destructuring rest operator is used, rest elemnets addd in the rest opearator 

console.log(obj);

// console.log(bank);
