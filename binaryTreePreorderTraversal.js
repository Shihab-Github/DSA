let tree = {
  value: 1,
  left: null,
  right: {
    value: 2,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: null,
  },
};

function preorderTraversal(root) {
  let stack = [];
  let result = [];

  let currentNode = root;
  while (currentNode || stack.length > 0) {
    while (currentNode) {
      stack.push(currentNode);
      result.push(currentNode.value);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop();
    currentNode = currentNode.right;
  }

  console.log(result);
}

preorderTraversal(tree);
