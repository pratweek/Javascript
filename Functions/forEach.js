// forEach loop in arrays
//arr.forEach (callBackFunction)
// callback is function passed as an argument to another function


let arr = [1,2,3,4,5,6];
arr.forEach(function printVal(val){
    console.log(val);
});

//Similary using arrow function 

let fruits = ["Apple","Mango", "Guava","Pineapple"]
fruits.forEach( printFru = (fru) => {
    console.log(fru)
});


let cities = ["pune", "mumbai", "kolkata"]
cities.forEach(listCity = (city, idx, cities) => {
    console.log(city.toUpperCase(), idx, cities)
} )

//forEach is a type of Higher order function or methods. They are functions which use other function as parameter or return function as value