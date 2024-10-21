/*const Product = {
    name: "Pen",
    price : 270,
    Model : "Parker Jotter",
    Ink : "blue",
    Rating : 4
};
console.log(Product);*/



//Practise 
/*
let num = prompt("enter a number:");

if(num %5===0) {
    alert(num, "is multiple of 5");
}else{
    alert(num,"is not a multiple of 5");
}
*/


//Practice 3
let score = prompt("enter your score");
let grade;

if (score>= 90 && score<=100) {
grade = "A";    
}else if(score>=70 && score<=89){
    grade = "B"
}else if(score>=60 && score<=69){
    grade = "C"
}else if(score>=50 && score<=59){
    grade = "D"
}else if(score>=0 && score<=49){
    grade = "F"
}
console.log("according to your scores your grade was :" grade );