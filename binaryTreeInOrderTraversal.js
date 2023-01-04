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

function inorderTraversal(root) {
  let stack = [];
  let result = [];

  let currentNode = root;
  while (currentNode || stack.length > 0) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop();
    result.push(currentNode.value);
    currentNode = currentNode.right;
  }

  console.log(result);
}

inorderTraversal(tree);
