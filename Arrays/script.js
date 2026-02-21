let marks = [65,34,56,89,93];
console.log(marks);
console.log(marks.length);

let heroes = ["ironman", "captain america", "batman"];

console.log(typeof marks);
//Arrays itself is object and instead of key & value pair it has index & value

console.log(heroes[2]);
console.log(heroes[7]);
heroes[1] = "Doctor Strange";
console.log(heroes); //Arrays are mutable thus can be changed unlike strings 

//Looping over arrays
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

//Using for-of
for(let hero of heroes){
    console.log(hero);
}

let cities= ["Delhi", "Mumbai", "Kolakata", "Chennai"];
for (let city of cities){
    console.log(city.toUpperCase());
}
