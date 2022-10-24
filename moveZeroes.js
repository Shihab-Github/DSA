var moveZeroes = function (nums) {
  let zeroes = nums.filter(x => x === 0);
  let nonZeroes = nums.filter(x => x !== 0);
  let result = nonZeroes.concat(zeroes)

  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }

  console.log(nums);
};

let vals = [0, 1, 0, 3, 12];
moveZeroes(vals);
