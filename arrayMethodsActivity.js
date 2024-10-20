let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];

let conc = arr1.concat(arr2);
console.log(conc);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);

let removedElement = fruits.pop();
console.log(fruits); 
console.log(removedElement);

let array2 = [1, 2, 3];
let removedElement2 = array2.shift(); 
console.log(array2); 
console.log(removedElement2); 

fruits.sort(); 
console.log(fruits); 

let fruitss = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];
let New = fruitss.slice(0, 2);
console.log(New);

let months = ["Jan", "Mar", "May", "Jul"];
months.splice(1, 0, "Feb");
months.splice(3, 0, "Apr");
months.splice(5, 0, "Jun");
months.splice(3, 1); 
console.log(months);