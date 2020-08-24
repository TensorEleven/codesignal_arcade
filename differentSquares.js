/*
    Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
differentSquares(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2
2 1
2 2
2 2
2 2
2 2
1 2
2 2
2 3
2 3
2 1
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

Guaranteed constraints:
1 ≤ matrix.length ≤ 100,
1 ≤ matrix[i].length ≤ 100,
0 ≤ matrix[i][j] ≤ 9.

[output] integer

The number of different 2 × 2 squares in matrix.
*/

function differentSquares(matrix) {
    tmp = []
    ans = []
    let i=0
    
    //finding left top of all square     
    while(i<matrix.length-1){
        let k=0
        while (k<matrix[0].length-1){
            //building 2x2 square from the left top of the square
            let x = i
            while (x<i+2){
                let y = k
                while (y<k+2){
                    tmp.push(matrix[x][y])
                    y++
                }
                x++
            }
            //check if actualy square doesn't exist in ans[]
            tmp = tmp.toString() //convert tmp to string for ans[] element search
            if(!ans.some(e=>e==tmp))//if no element match, then add tmp to ans[]
                ans.push(tmp)
            //emptying tmp
            tmp = []
            k++
        }
        i++   
    }
    //return the size of ans, wich contain all different square
    return ans.length
}
