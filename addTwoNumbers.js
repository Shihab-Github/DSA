let lnk1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};

let lnk2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};

let lnk3 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 9,
              next: null,
            },
          },
        },
      },
    },
  },
};

let lnk4 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: null,
      },
    },
  },
};

let lnk5 = {
  val: 0,
  next: null,
};

let lnk6 = {
  val: 1,
  next: null,
};

function addNode(cNode, lst, val) {
  let node = {
    val,
    next: null,
  };
  if (lst === null) {
    lst = node;
    cNode = lst;
  } else {
    cNode.next = node;
    cNode = cNode.next;
  }

  return { cNode, lst };
}

function addTwoNumbers(l1, l2) {
  var currentNode = null;
  var linkedList = null;
  let remainder = 0;
  while (l1 || l2) {
    let val1 = 0;
    let val2 = 0;

    if (l1) val1 = l1.val;
    if (l2) val2 = l2.val;

    let result = val1 + val2;

    if (remainder) {
      result = result + remainder;
      remainder = 0;
    }

    if (result > 9) {
      result = Math.abs(10 - result);
      remainder = 1;
    }

    let res = addNode(currentNode, linkedList, result);
    linkedList = res.lst;
    currentNode = res.cNode;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (remainder) {
    currentNode.next = {
      val: remainder,
      next: null,
    };
  }
  return linkedList;
}

console.log(addTwoNumbers(lnk1, lnk2));

// console.log(addTwoNumbers(lnk3, lnk4));

// console.log(addTwoNumbers(lnk5, lnk6));
