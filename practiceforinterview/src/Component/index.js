//Constructor function



// function Persons (name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function () {
//         console.log(`Name is ${this.name} and age is ${this.age}`)
//     }
// }

// const john = new Persons("suhail", 26)
// console.log(john)
// john.sayHello()


//Classes

// class Animal{
//     constructor(name, age) {
//         this.name = name;
//         this.age=age
//     }
//     sayHello () {
//         console.log(`my name is ${this.name} and ${this.age}`)
//     }
// }
// const bruce = new Animal('suhail', 26)
// bruce.sayHello();

// Define the desired category
// const desiredCategory = "apple";

// Sample array with multiple categories
// const array = [
//     { name: "item1", category: "mango" },
//     { name: "item2", category: "apple" },
//     { name: "item3", category: "banana" },

// ];


// const filteredArray = array.filter(item => item.category === desiredCategory);
// console.log(filteredArray)

// filteredArray.forEach(item => console.log(item.name));

// let arr = ["apple", "banana", "mango"]
// let newArr = arr.filter((item) => {
//     return item!=="apple"&& item!=="banana"
// })
// console.log(newArr.join(" "))


//merge to array without higher order function
// let arr1 = [1, 3, 11, 5];
// let arr2 = [7, 10, 12, 15];
// output=[1,3,5,7,10,11,12,15]
// let arr3 = [];

// let i = 0;
// let j = 0;

// while (i < arr1.length || j < arr2.length) {
//     if (i === arr1.length) {
//         arr3.push(arr2[j]);
//         j++;
//     } else if (j === arr2.length) {
//         arr3.push(arr1[i]);
//         i++;
//     } else if (arr1[i] < arr2[j]) {
//         arr3.push(arr1[i]);
//         i++;
//     } else {
//         arr3.push(arr2[j]);
//         j++;
//     }
// }

// console.log(arr3.join(" "));


// merge two array and return value as sortd
// let arr1 = [1, 3, 31, 25];
// let arr2 = [7, 10, 12, 15];
// let arr = [...arr1, ...arr2];
// function sortedArray(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp;

//             }
//         }
//     }
//     return arr;
// }

// console.log(sortedArray(arr.join(" ")));


// revres an array
let arr = [1, 2, 3, 4, 5];
let start = 0;
let end = arr.length - 1;

while (start < end) {
    // Swap elements at start and end indices
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Move the pointers inward
    start++;
    end--;
}

console.log(arr);
