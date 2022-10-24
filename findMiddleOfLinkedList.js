let linkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null,
          },
        },
      },
    },
  },
};

var middleNode = function (head) {
  let arr = [];
  arr.push(head);
  let currentNode = head.next;

  while (currentNode) {
    arr.push(currentNode);
    currentNode = currentNode.next;
  }

  if (arr.length % 2 === 0) {
    let idx = (arr.length / 2);
    return arr[idx];
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
};

console.log(middleNode(linkedList));
