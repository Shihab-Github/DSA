//The array needs to be sorted if we want to apply 2 pointers technique
const quickSort = require("./quickSort");

var twoSum = function (nums, target) {
  quickSort(nums);

  let p1 = 0;
  let p2 = nums.length - 1;

  while (p1 <= p2) {
    let sum = nums[p1] + nums[p2];
    if (sum === target) return [p1, p2];

    if (sum < target) p1++;
    else p2--;
  }
};

// twoSum([2,7,11,15], 9)
console.log(twoSum([3, 2, 4], 6));

//    target = 9
//    [2, 7, 11, 15];
//     0  1   2   3

//     p1         p2

// add two values, and check sum

// sum = 17

// sum > 9, so decrement p2

//    [2, 7, 11, 15];
//     0  1   2   3
//     p1     p2

// add two values and check sum

//  sum = 13, so decrement p2

//    [2, 7, 11, 15];
//     0  1   2   3
//     p1 p2    



