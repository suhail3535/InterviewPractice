
//sum of positive integer
// const arr = [1, -2, 3, 4, -5, 6];
// function sumPositiveIntegers(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum =sum+ arr[i];

//     }

//   }

//        return sum;
// }
// console.log(sumPositiveIntegers(arr));
// ****************************************************

// Question-02 Find max and min in the given array
// const arr = [7, 2, 12, 5];
// function findMaxAndMin(arr) {
//   let max = -Infinity;
//   let min = Infinity;;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }

//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//  return { max, min };
// }

// const result = findMaxAndMin(arr);
// console.log("Maximum number is",result.max,"minimun number is",result.min);
// ****************************************************

//Question-03 Find missing and repeated inside the array******
// let arr=[1,3,4,4,5];
// function missingrepated(arr){
//       let obj={};
//       for(let i=1;i<=arr.length;i++){
//           obj[i]=0;
//       }
//     // console.log(obj)
//     for(let i=0;i<arr.length;i++){
//         obj[arr[i]]++
//     }
//     // console.log(obj)
//     let missing;
//     let repeted;
//     for(let key in obj){
//         if(obj[key]<1){
//             missing=key
//         }
//         if(obj[key]==2){
//             repeted=key
//         }
//     }
//   return{missing,repeted}
//     // console.log(missing,repeted)
// }
// let result=missingrepated(arr)
// console.log("Missing number is",result.missing,"Repeted number is",result.repeted)


// ****************************************************

//Question-04 Find second largest number inside the array******
// const array = [5, 2, 8,9, 1, 7];
// function findSecondmaxNumber(arr) {
//   let max = -Infinity;
//   let secondmax = -Infinity;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       secondmax = max;
//       max = arr[i];
//     }
//   }

//   return secondmax;

// }
//  console.log(findSecondmaxNumber(array));
// console.log("Second max number:", result);



//Question-05 Convert lower char to upper and upper char to lower******
// let str="maSai";
// // output="MAsAI"
// let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let lower="abcdefghijklmnopqrstuvwxyz";
// let bag="";
// for(let i=0;i<str.length;i++){

//   for(let j=0;j<lower.length;j++){
//     if(str[i]===lower[j]){
//       bag=bag+upper[j]
//     }else if(str[i]===upper[j]){
//       bag=bag+lower[j]
//     }
//   }

// }
// console.log(bag)
// Call back funtion example
// function userData(name,lastName,callback){
// let intro = 'My name is ' + name + ' and last name is ' + lastName + '.';
// callback(intro);


// }
// userData("suhail","Khan",function(intro){
//   console.log(intro)
// })



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
// let arr1 = [1, 2, 3, 5];
// let arr2 = [4, 6, 7, 8];
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
//     return arr.join(" ");
// }

// console.log(sortedArray(arr));
// let arr1 = [2, 1, 3, 4]
// let arr2 = [5, 6, 10, 9]


// let arr = [...arr1, ...arr2]
// function find (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     console.log(arr.join(" "))
// }

// find(arr)

// revres an array
// let arr = [1, 2, 3, 4, 5];
// let start = 0;
// let end = arr.length - 1;

// while (start < end) {
// let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
// }

// console.log(arr);

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(2,4))



// let arr = [1, 2, 3, 4, 5]
// max = 5
// min=1

// function maxMin (arr) {
//     let max = -Infinity;
//     let min = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return{max,min}
// }
// let result = maxMin(arr)
// console.log("Maximun number is",result.max ,"and Minimun number is",result.min)
// // console.log(maxMin(arr))

// Check if an Array is Sorted

// Problem: Check if the elements in an array are sorted in non - decreasing order.


// let arr = [1, 2, 3, 4, 5]
// function isArraySorted (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < arr[i-1]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isArraySorted(arr))

// let arr = [1, 2, 3, 4, 4, 5]
// let obj = {};
// for (let i = 0; i < arr.length; i++){
//     if (obj[arr[i]] === undefined) {
//         obj[arr[i]] = 1;
//     } else {
//         obj[arr[i]]++
//     }

// }

// let ans;
// for (let key in obj) {
//     if (obj[key] > 1) {
//         delete(obj[key])
//     }
// }
// console.log(arr)

// let arr = [1, 2, 3, 4, 4, 5];
// let resultArray = [];

// function find (arr) {
//     let bag = "";
//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] !== arr[i + 1]) {
//             bag += arr[i] + " ";
//         }
//     }
//     resultArray.push(bag);
//     console.log(resultArray);
//     console.log(bag);
// }
// remove duplicate from an Array
// find(arr);
// let arr = [1, 2, 3, 4, 4, 5, 5];
// let obj = {};
// let resultArray = [];
// function Unique (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i]] = 1;
//     }

//     for (let key in obj) {
//         resultArray.push(Number(key));
//     }
//     console.log(resultArray)
// }

// Unique(arr)
// some of positive integer
// const arr = [ -2, -9, -4, 0, 9, 1, 7];

// function findSum (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum = sum + arr[i]
//         }
//     }
//     return sum
// }
// console.log(findSum(arr))


function findIntersection (arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}


let arr1 = [1, 2, 3, 4, 5,7];
let arr2 = [4, 5, 6, 7, 8,7];
let result = findIntersection(arr1, arr2);
console.log(result);

