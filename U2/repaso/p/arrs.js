let arr = [1, 2, 3]
arr.splice(1, 0, 4); 
console.log(arr)

let arr2 = [1, 2];
arr.unshift(0); // [0, 1, 2]


let arr3 = [1, 2, 3];
arr.shift(); // 1

[1, 2, 3].slice(1, 2); // [2]

[1, 2, 3, 4].copyWithin(1, 2); // [1, 3, 4, 4]
