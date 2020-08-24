/*
    Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, 

    and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example

For
grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
        [4, 6, 5, 8, 7, 9, 3, 2, 1],
        [7, 9, 8, 2, 1, 3, 6, 5, 4],
        [9, 2, 1, 4, 3, 5, 8, 7, 6],
        [3, 5, 4, 7, 6, 8, 2, 1, 9],
        [6, 8, 7, 1, 9, 2, 5, 4, 3],
        [5, 7, 6, 9, 8, 1, 4, 3, 2],
        [2, 4, 3, 6, 5, 7, 1, 9, 8],
        [8, 1, 9, 3, 2, 4, 7, 6, 5]]
the output should be
sudoku(grid) = true;

For
grid = [[1, 3, 2, 5, 4, 6, 9, 2, 7],
        [4, 6, 5, 8, 7, 9, 3, 8, 1],
        [7, 9, 8, 2, 1, 3, 6, 5, 4],
        [9, 2, 1, 4, 3, 5, 8, 7, 6],
        [3, 5, 4, 7, 6, 8, 2, 1, 9],
        [6, 8, 7, 1, 9, 2, 5, 4, 3],
        [5, 7, 6, 9, 8, 1, 4, 3, 2],
        [2, 4, 3, 6, 5, 7, 1, 9, 8],
        [8, 1, 9, 3, 2, 4, 7, 6, 5]]
the output should be
sudoku(grid) = false.

The output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.
These examples are represented on the image below.



Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer grid

A matrix representing 9 × 9 grid already filled with numbers from 1 to 9.

Guaranteed constraints:
grid.length = 9,
grid[i].length = 9,
1 ≤ grid[i][j] ≤ 9.

[output] boolean

true if the given grid represents a correct solution to Sudoku, false otherwise.
*/


function haveDuplic (arr){  //return true if one element is repeated
    let i=0,
        pres = new Array (9) //pres[i] is true if te number have duplicated element
        
    while(i<9){
        if(pres[arr[i]-1])
            return true
        else
            pres[arr[i]-1] = true
        i++
    }
    return false
}

function sudoku(grid) {
    let column = [],
        box = []
    
    for(let i=0;i<9;i++){
        
        if(haveDuplic(grid[i]))     //checking line [i]
            return false
        
        for(let j=0;j<9;j++){
            column.push(grid[j][i]) //fill column with the column i in grid
            
            if((i%3==0)&&(j%3==0)){ //extract 3x3 box
                for(let x=i;x<i+3;x++)
                    for(let y=j;y<j+3;y++)
                        box.push(grid[x][y])
                 
                if(haveDuplic(box))      //checking box at [i][j]
                    return false
                box = []                 //emptying box
            }
        }
        
        if(haveDuplic(column))      //checking column [i]
            return false
        column = []                 //emptying colomn
    }

    return true   
}

