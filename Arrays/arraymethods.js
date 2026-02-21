//Some array methods may change array or may create a new array

let foodItems = ["potato","apple","mango"];
foodItems.push("chips","burger");
console.log(foodItems); //add to end

let deletedItem = foodItems.pop(); //To delete from end
console.log(foodItems);
console.log(deletedItem);

console.log(foodItems.toString()); //Convert arrays in string
console.log(foodItems); //Original array remains same

let marks = [67,87,43,80];
console.log(marks.toString());

let marvel = ["Thor","Ironman","Captain America", "Black Panther"];
let dc = ["Batman", "Superman", "Flash","Aquaman"];
let heroes = marvel.concat(dc); //join multiple arrays
console.log(heroes);
console.log(dc); //Original Array remains same

 marvel.unshift("Antman");//Add to start
console.log(marvel);
let new_marvel = marvel.shift(); //Remove from start
console.log(marvel);
console.log(new_marvel);

console.log(marvel);
console.log(marvel.slice()); //Return a piece of array
console.log(marvel.slice(3));
console.log(marvel.slice(1,4));

let arr = [23,64,34,54,65,75,36,98];
arr.splice(2,2,102,105); //Replace a element in array
console.log(arr);
arr.splice(2,0,111); //Add element  in array
console.log(arr);
arr.splice(3,1); //Remove an element
console.log(arr);

arr.splice(3) //Deletes element after 3 elements
console.log(arr);


