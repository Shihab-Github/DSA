const binarySearch = require("./binarySearch");

// 4 is the first bad version
//    [ 1, 2, 3, 4, 5 ]
//      0  1  2  3  4

//      L     M     R   // is 3 bad version ? no, then update L. is 4 bad version ? yes, then update R

//               L
//               R
//               M

//  30 is the bad version
//      [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//       0   1   2   3   4   5   6   7   8    9

//       L               M                    R   // is 50 bad version ? yes, update R and recalculate M

//       L       M       R  // is 30 bad version ? yes, update R and re calculate M

//       L   M   R  // is 20 bad version ? no, then update L and re calculate M

//           L   R

//   90 is the first bad version

//     [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//      0    1   2   3   4   5   6  7   8    9

//      L                M                   R   // is 50 the bad version, no, then update L and recalculate M

//                       L       M           R   // is 70 the bad version ? no, then update L and recalculate M

//                               L  M         R  // is 80 the bad version ? yes, then update R and recalculate M

//                               L  R

//  100 is the first bad version
//   [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]
//    0   1    2   3   4  5   6    7  8    9    10   11   12

//    L                       M                           R    //  is 70 the bad version ? no, then update L and recalculate M

//                            L            M         //     R  is 100 the bad version ? yes, then update R and recalculate M

//                            L    M       R   // is 80 the bad version ? no, update L and recalculate M

//                                 L  M    R   // is 90 the bad version ? no update L and recalculate M

//                                    L    R

//    1 is first bad version

//        [1, 2, 3, 4];
//         0  1  2  3

//         L  M     R

//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
//   0  1  2  3  4  5  6  7  8   9  


// n = 10
// L = 0
// R = 9
// M = 4