/* 

[
    [0,1,0,0], // 0
    [1,1,1,0], // 1
    [0,1,0,0], // 2
    [1,1,0,0]  // 3
]

need to calculate perimeter. 

perim = 0

if grid[i][j] = 1, its a land. grid[i][j] = 0, it's water

ROW = 0

1st run, i = 0, j = 0
grid[i][j] = 0

2nd run, i = 0, j = 1
grid[i][j] = 1, so perim = 4

3rd run, i = 0, j = 2
grid[i][j] = 0

4th run, i = 0, j = 3
grid[i][j] = 0

==========

ROW = 1

1st run, i = 1, j = 0
grid[i][j] = 1, so perim = 8

2nd run, i = 1, j = 1,
grid[i][j] = 1, but need to check for top and left rect

look for top rect

if(i > 0)
    grid[i-1][j]

look for left rect

if(j > 0)
    grid[i][j-1]

*/
