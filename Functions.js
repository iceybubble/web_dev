/*function myFunction(){
    console.log("welcome to apna college");
    console.log("We are learning JavaScript");
}
myFunction();
*/

//funxtion --> 2 numbers, sum

/*function sum(x, y){
    //local variable --> scope
    s =x + y;
    console.log("before return");
    return s;
}
let val = sum(3,4);
console.log(val);
*/


//sum function

function sum(a , b){
    return a+b;
}

//Arrow Function

const arrowSum = (a, b) => {
    console.log(a+b);
};

//multiplication function

function mul(a , b){
    return a * b;
}

const arrowMul=(a, b)=>{
    console.log(a*b);
}


//practice question

/*
function countVowels(str){
    let count = 0;
    for (const char of str){
        if(char==="a" || char === "e" || char==="i" || char==="o" || char === "u");{
            count ++;
        }
    }
    return count;
}

const countVow = (str) =>{
    let count = 0;
    for (const char of str){
        if(char==="a" || char === "e" || char==="i" || char==="o" || char === "u");{
            count ++;
        }
    }
    return count;
}
*/


/*let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val){
console.log(val);
});
*/


let arr = ["pune", "delhi","mumbai"];

arr.forEach((val, idx, arr) =>{
console.log(val.toUpperCase(), idx , arr);
});

// Practice Question --> For a given array of numbers, print the square of each value using thr forEach loop

let nums = [2, 93, 4, 56, 67];

let calcSquare = (num) =>{
    console.log(num*num); 
};
nums.forEach(calcSquare);