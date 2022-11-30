let lnk1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};

let lnk2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

var mergeTwoLists = function (l1, l2) {
  let result = new ListNode(0);
  let temp = result;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next;
  }

  if (l1 !== null) {
    temp.next = l1;
  }

  if (l2 !== null) {
    temp.next = l2;
  }

  return result.next;
};
