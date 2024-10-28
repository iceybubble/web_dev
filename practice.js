/*let num = prompt("enter a number:");

if(num %5===0) {
    alert(num, "is multiple of 5");
}else{
    alert(num,"is not a multiple of 5");
}
 */
/*
const Product = {
    name: "Pen",
    price : 270,
    Model : "Parker Jotter",
    Ink : "blue",
    Rating : 4
};
console.log(Product);
*/



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
console.log("according to your scores your grade was : ", grade);


//practice 4--> find all the even number between 1 to 100

/*for(let num=0; num<=100; num++){
if(num%2==0)
    console.log("num=",num);
}*/




//5--> random game number

/*let gameNumber = 27;

let userNum = prompt("guess the game number: ");

while (userNum !=  gameNumber) {
    userNum = prompt("You entered wrong nummber, guess again : ");
}

console.log("congratulations,you entered the right number");*/



//6 --> create prompt to enter full name and generate a username

/*let fullName=prompt("enter your full name without spaces");

let userName = "@" + fullName + fullName.length;
console.log(userName);*/























































































































