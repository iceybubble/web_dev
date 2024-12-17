
/*let firstEl = document.querySelector("p");   //1st element
console.dir("firstEl");

let allEl = document.querySelector("p");   // all element
console.dir("allEl");

console.dir(document.body.firstChild);



// div = document.querySelector("div");
//console.dir(div);
*/


/*let div= document.querySelector("div");
console.log(div);

let name = devicePixelRatio.getAttribute("name");
console.log(name);
*/


let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);
div.prepend(newBtn);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>hi, I am new!</i>";

document.querySelector("body").prepend(newHeading)
