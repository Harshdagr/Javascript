//scope

// var a= 2;
// console.log(a);

// {     // blocked scope
//     const a="harsh";
//     console.log(a)
// }


//fucntion scoped
//  function hello(){

//   if(true){
//     a = "vikas"            
//     console.log(a);   //this will print first vikash then print harsh this is called variable shadowing basically its overlaps the first one variable
//   }

//     var a="harsh";
//     console.log(a);
//  }

//  hello()


// Global scope
// declare variable anywhere outside the function





//illegal shadowing 

// function hello(){
//     // var a="hello";
//     let b="bye";
//     // console.log(a);
//     console.log(b);

//     if(true){
//         // let a ="hii"; 
//         var b="goodbye";
//         // console.log(a);
//         console.log(b);
//     }
// }
// hello();


//illegal shadowing
// function hello(){
//     let a="hi";
//     if(true){
//         var a ="hello"   //this var give error due to In JavaScript, variables declared with var are hoisted to the top of their  function or global scope, while variables declared with let or const are hoisted but not initialized. This means that the var a declaration inside the if block affects the outer let a declaration.
//         console.log(a);
//     }
//     console.log(a); 
// }
// hello();

//Re-initialisation  var vs let vs const

// var a =5;
// a =6;
// console.log(a)   // working fine

// let a=5;
// a =6;
// console.log(a)  // working fine

// const a=5;
// a =6;
// console.log(a);  // cannot re initialise in case of  const


//Hoisting - Hoisting is JavaScript's default behavior of moving declarations(variable and functions) to the top.(during execution phase)

// console.log(a);  // here it give undefine but not give error
// let a=5;


//  x= 5;
//  console.log(x);
//  var x;       


//Let and const in hoisting -
//  Variables defined with let and const are hoisted to the top of the block, but not initialized
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.


// console.log(x);  //shows uninitialised  x is error
// let x =5;     

// carname = "bmw" Using a const variable before it is declared, is a syntax error, so the code will simply not run.
// const carname;
// console.log(carname)



// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.

//take 2 example
//1.
// var x=4;
// var y=5;
// console.log(x +y);  // this is valid and not give error

//2.
// var x= 4;                                                        var x=4;
// console.log(x);                                                  var y;      //this will give undefine that y is undefine becaiuse of hoisting
// console.log(y);   // after hoisting this will see like =>        console.log(y);
// var y=5;                                                         var y=5;

// let x =4;
// console.log(x)
// console.log(y)   // in case of let it give error that y is uninitialized
// let y=5;

//JAVASCRIPT USE STRICT method
//"use strict"; Defines that JavaScript code should be executed in "strict mode"
//It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

// a =5;
// console.log(a);  => in this example we use undeclared variable a but we cannot use this in strict mode.
// var a;

// "use strict";
// x=5;     //now this will case an error
// console.log(x);


// Declared inside a function, it has local scope (only the code inside the function is in strict mode):
// x = 3.14;       // This will not cause an error.
// myFunction();

// function myFunction() {
//   "use strict";
//   y = 3.14;   // This will cause an error
// }
// let myfunction = (a , b) => a*b;

//  let  a= myfunction(5,6);
//  console.log(a);



//Temporal dead zone - is the time between the decelaration and initialization of let and const variable.

// function abc(){
//     console.log(a , b, c);
//     var a=4;   //give  undefine
//     let b=3;   //give uninitialized
//     const c=5;  //give uninitialized
// }
// abc()




//map()  is a function use to create new array with the help of existing array

// const arr =[1 ,2 ,3 ,4,5]

// var newarrr = arr.map((arr ,i ,ar)=>{
//     return arr+i;
// })
// console.log(newarrr)

//filter() - conditionally render the element from array 

// const ages = [32, 33, 16, 40];
// const result = ages.filter(age=>age>18)
// console.log(result);

// const arr =[1, 23   ,3 ,43 ,5]


// function handelbutton(){
//     document.getElementById("demo").innerHTML= arr.filter(ar=>ar>18)
// }
// function add(){
//    return x=x+1
// }
// function sub(){
//    return x=x-1;
// }


//reduce()
// The reduce() method returns a single value: the function's accumulated result
// The reduce() method does not change the original array.
// The reduce() method returns a single value: the function's accumulated result.
// const arr =[1,2, 3, 4,5]

// const newarr = arr.reduce((acc , curr)=>{   //it has accumulator with initial value 0 and which store previous vlaue  
//     return acc + curr;
// },0)
// console.log(newarr);   // 15

// const arr =[-1 ,0,1].reduce(v=>v+1)
// console.log(arr);   return last store value 1


//polyfill of Map()


//1. map vs foreach
//map returns a new array with the results of the function
//forEach does not return anything and only modifies the original array.

//forEach example
// const arr =[ 1, 2 ,3 ,4,5];

//    arr.forEach((num)=>{
//    console.log( num + 1);
// })





// const arr = [
//     {   name: "hello", class: "hi", rollno: "hey"},
//     {   name: "hellsgsd", class: "dhi", rollno: "dhey"},
//     {   name: "helldd", class: "hdi", rollno: "hedy"}
// ]
// const newarr = arr.map((array) => {
//     return array.rollno.toUpperCase()
// })
// console.log(newarr);


//i Question map vs for each

// const arr = [1 ,2 ,9,3, 4, 5,]

// let newarray = arr.map((array)=>{
//     return array+2;
// })
// console.log(newarray);


//map , filter , reduce output base question..........................................................................................


//Q1 - Return only name  of students in capital

//method 1 by for loop
// const student = [
//     { name:"abc" , id:1 ,class:"xyz"},
//     { name:"dsf", id:2 , class:"123d"}
// ]
// const array=[];
// for(let i =0;i<student.length;i++){
// array.push(student[i].class.toUpperCase())
// }
// console.log(array);


//method 2 by map
// const student = [
//     { name:"abc" , id:1 , class:"xyz"},
//     { name:"dsf", id:2 , class:"123d"}
// ]
// const students = student.map((stud)=> stud.class.toUpperCase()
// )
// console.log(students);


//Q2 - Return only those name of students who scored more than 60 marks
// const student = [
//     { name:"abc" , score:69 , class:"xyz"},
//     { name:"dsf", score:80 , class:"123d"},
//     { name:"dsf", score:40 , class:"123d"}
// ]
// const result = student.filter((stud)=> stud.score>60)
// console.log(result);

//Q3 - Return only those whose marks is  more than 60 and roll no greater than 20
// for this question use this logic
// const result = student.filter((stud)=> stud.score>60 && stud.rollno>20)


//Q4 sum of score of all the students;
// const student = [
//     {name:"sumit" , score:50, class:"abc"},
//     {name:"raj" , score:55, class:"abc"},
//     {name:"amit" , score:60, class:"abc"}
// ]
// const students = student.reduce((acc , stud)=>{
//     return acc+stud.score
// },0);
// console.log(students);

//Q5 Return only those name of students who marks is greater than 60  (Chaning map and filter)

const student = [
    {name:"sumit" , score:50, class:"abc"},
    {name:"raj" , score:55, class:"abc"},
    {name:"amit" , score:60, class:"abc"}
]
const students= student.filter((stud)=> stud.score>52).map((studs)=> studs.name)

console.log(students);