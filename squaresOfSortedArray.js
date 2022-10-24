const quickSort = require("./quickSort");

function sortedSquares(nums) {
  let newNums = nums.map((x) => Math.pow(x, 2));

  quickSort(newNums);
  console.log("newNums: ", newNums);
}

let values = [-4, -1, 0, 3, 10];
sortedSquares(values);
