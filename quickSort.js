/***
 * QUICK SORT ALGORITHM
 * SELECT THE LAST ITEM OF ARRAY AS PIVOT
 * SET UP 2 POINTERS (LOWINDEX AND HIGHINDEX)
 * IF ARRAY[LOWINDEX] <= PIVOT, INCREMENT LOWINDEX
 * IF ARRAY[LOWINDEX] > PIVOT, STOP THERE
 * IF ARRAY[HIGHINDEX] >= PIVOT, DECREMENT HIGHINDEX
 * IF ARRAY[HIGHINDEX] < PIVOT, STOP THERE
 * TIME TO SWAP!
 * SWAP ARRAY[LOWINDEX] WITH ARRAY[HIGHINDEX]
 * ONCE LOWINDEX AND HIGHINDEX IS SAME, THEN ITS TIME TO SWAP PIVOT WITH ARRAY[LOWINDEX]
 * SWAP PIVOT WITH ARRAY[LOWINDEX]
 * TIME TO PERFORM QUICKSORT RECURSIVELY ON THE LEFT AND RIGHT SUBARRAYS
 * FOR THE LEFT SUBARRAY, THE LOWINDEX WOULD BE LEFTPOINTER AND HIHGINDEX WOULD BE LOWINDEX-1 BECAUSE CURRENTLY ARRAY[LOWINDEX] IS THE PIVOT
 * FOR THE ROIGHT SUBARRAY, THE LOWINDEX WOULD BE LEFTPOINTER+1 AND HIGHINDEX WOULD BE RIGHTPOINTER
 * ****/

function quickSort(array) {
  // Write your code here.
  doQuickSort(array, 0, array.length - 1);
}

function doQuickSort(array, lowIndex, highIndex) {
  //base case
  if (lowIndex >= highIndex) return;

  //chose a pivot
  let pivot = array[highIndex];

  //perform the partioning
  let leftPointer = lowIndex;
  let rightPointer = highIndex;

  while (leftPointer < rightPointer) {
    while (array[leftPointer] <= pivot && leftPointer < rightPointer)
      leftPointer++;

    while (array[rightPointer] >= pivot && leftPointer < rightPointer)
      rightPointer--;

    swap(array, leftPointer, rightPointer);
  }

  swap(array, leftPointer, highIndex);

  doQuickSort(array, lowIndex, leftPointer - 1);
  doQuickSort(array, leftPointer + 1, highIndex);
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// let numbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 40));
// console.log("before: ", numbers);
// quickSort(numbers);
// console.log("after: ", numbers);

module.exports = quickSort;
