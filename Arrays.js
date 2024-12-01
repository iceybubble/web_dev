/*let marks  = [97,82,75,64,36];
console.log(marks);
console.log(marks.length);   //property

let heroes = ["ironman", "thor","shaktiman", "hatim", "hulk"];
//for loop
for(let idx=0; idx < heroes.length;[idx++]){
    console.log(heroes[idx]);
}

//for of
for(let hero of heroes){
    console.log(hero);
}
//or
for(let hero of heroes){
    console.log(hero.toUpperCase());
}
*/


//Practice Question
// for a given array with marks of student. find the average marks of the entire class.


let marks = [87, 97, 44 ,75, 65, 80];

let sum = 0;
for(let value of marks){
    console.log(value);
    sum = sum+=value;
}

let avg = sum/marks.length;
console.log(`avg marks of the class = ${avg}`);

// Practice Question

 let items = [250, 645, 300, 900, 50];

// using for of loop
let i =0;
for (let val of items){
console.log(`value at index ${i}=${val}`);
let offer = val/10;
items[i] = items[i]-offer;
console.log (`value after offer = ${items[i]}`);
i++;
}
 
 //using for loop
 for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
 }

 console.log(items)














 