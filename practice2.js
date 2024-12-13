/*
// filter out the of the marks of students that scored 90.

let marks = [97,64,32,98,56,88,94];


let toppers = marks.filter((val) => {
    return val>90;
});
console.log(toppers);
*/


//question 2

let n = prompt ("enter a number: ");

let arr = [];

for(let i=1; i<=n; i++){
    arr[i-1]= i;
  
}
console.log(arr);

let sum = arr.reduce((res, curr)=>{
    return res + curr;
});

console.log("sum =",sum);

// factorial


let factorial = arr.reduce((res, curr)=>{
    return res * curr;
});

console.log("factorial=", factorial);