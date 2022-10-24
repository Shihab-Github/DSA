function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (array[mid] !== target && left <= right) {
    if (array[mid] > target) {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    } else {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }
  }

  if (array[mid] === target) return mid;
  return -1;
}

module.exports = binarySearch;

//target 2
let numbers = [2, 9, 19, 30, 45, 90, 118];
//             0  1   2   3   4   5   6

//             L          M           R   1st iteration, middle is 30. Since middle is larger than 2, we update right and recalculate middle

//             L  M   R     middle is 9 which is still larger than 2, so we update Right and re calculate middle

//             L
//             R

//target 118
let numbers2 = [2, 9, 19, 30, 45, 90, 118];
//             0  1   2   3   4   5   6

//             L          M           R   1st iteration: 118 is larger than 30, so we update our left and re calculate middle

//                            L   M    R  2nd iteration: 118 is larger than 90, so we update out left and recalculate middle

//                                     L
//                                     R

// console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
