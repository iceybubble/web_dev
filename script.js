/*
console.log("hello!");
//window.console.log("hello2");

console.dir(window.document);

console.dir(document.body.childNodes);
console.log(document.body);

*/ 

let heading = document.getElementById("heading");
console.dir(heading);



 let headings = document.getElementsByClassName("heading-class");
 console.dir(headings);
 console.log(headings);


let parahs = document.getElementsByTagName("p");
console.dir(parahs);
console.log(parahs);



let firstEl = document.querySelector(".heading-class");   //1st element
console.dir("firstEl");

let allEl = document.querySelector("p");   // all element
console.dir("allEl");














