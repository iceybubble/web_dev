//push,pop,toString
let foodItems = ["potato", "litchi", "tomato", "apple","Eggplant"]

console.log(foodItems);
console.log(foodItems.toString);

let deletedItem = foodItems.pop();


console.log("deleted", deletedItem);

// Concat
let marvelHeroes = ["Thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman",];

let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);

//Unshift
let MarvelHeroes = ["Thor", "spiderman", "ironman"];
let val = MarvelHeroes.unshift("antman");
console.log("deleted",val);


//slice
let Marvelheroes = ["Thor", "spiderman", "ironman","antman","Dr.Strange"];

console.log(marvelHeroes);

console.log(marvelHeroes.slice(1, 3))

//splice

let arr = [1,2,3,4,5,6,7];
console.log(arr)
//arr.splice(2,2,101,102);

//add Element
//arr.splice(2, 0, 101);

//delete element
arr.splice(3, 1);



//Practice Question

let companies = ["Bloomberg", "Microsoft","Uber","IBM","Netflix"];


companies.splice(2,1,"Ola");

companies.push("Amazon");

console.log(companies);
