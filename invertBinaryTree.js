var tree = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
};

function invertBinaryTree(root) {
  if (!root) return;

  var leftNode = invertBinaryTree(root.left);
  var rightNode = invertBinaryTree(root.right);

  root.left = rightNode;
  root.right = leftNode;

  return root;
}

console.log(invertBinaryTree(tree));
