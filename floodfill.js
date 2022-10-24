function floodFill(image, sr, sc, color) {
  let currentColor = image[sr][sc];
  if (currentColor === color) return;

  fill(image, sr, sc, currentColor, color);
}

function fill(image, sr, sc, currentColor, newColor) {
  image[sr][sc] = newColor;

  //GO TOP
  if (sr > 0 && image[sr - 1][sc] === currentColor) {
    fill(image, sr - 1, sc, currentColor, newColor);
  }

  //GO RIGHT
  if (sc < image[sr].length - 1 && image[sr][sc + 1] === currentColor) {
    fill(image, sr, sc + 1, currentColor, newColor);
  }

  //GO BOTTOM
  if (sr < image.length - 1 && image[sr + 1][sc] === currentColor) {
    fill(image, sr + 1, sc, currentColor, newColor);
  }

  //GO LEFT
  if (sc > 0 && image[sr][sc - 1] === currentColor) {
    fill(image, sr, sc - 1, currentColor, newColor);
  }
}

let matrix = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

floodFill(matrix, 1, 1, 2);

console.log(matrix)
  // [
  //   [1, 1, 1],
  //   [1, 1, 0],
  //   [1, 0, 1],
  // ];

