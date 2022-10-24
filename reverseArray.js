function reverseArray(list, start, end) {
  while (start <= end) {
    let temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
}

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(reverseArray(nums, 0, 3));

module.exports = reverseArray;

//  [1, 2, 3, 4, 5, 6, 7, 8];
//   0  1  2  3  4  5  6  7
//   L                    R

//   swap L with R
//  [8, 2, 3, 4, 5, 6, 7, 1];

// increment L, decrement R

//  [8, 2, 3, 4, 5, 6, 7, 1];
//      L              R

//    swap L with R
//  [8, 7, 3, 4, 5, 6, 2, 1];

//  increment L, decrement R

//  [8, 7, 3, 4, 5, 6, 2, 1];
//         L        R

//    swap L with R
//  [8, 7, 6, 4, 5, 3, 2, 1];

//   increment L, decrement R

//  [8, 7, 6, 4, 5, 3, 2, 1];
//            L  R

//     swap L with R
//  [8, 7, 6, 5, 4, 3, 2, 1];
//
