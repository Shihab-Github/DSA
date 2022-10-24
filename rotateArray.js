const reverseArray = require("./reverseArray");

function rotateArray(nums, k) {
  reverseArray(nums, 0, nums.length - 1);
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, nums.length - 1);
}

let values = [1, 2, 3, 4, 5, 6, 7];
let steps = 3;
console.log(values);
console.log(rotateArray(values, steps));
