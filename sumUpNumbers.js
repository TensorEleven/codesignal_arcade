/*
    Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order,

    starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Matrix size, a positive integer.

Guaranteed constraints:
3 ≤ n ≤ 100.

[output] array.array.integer
*/

function spiralNumbers(n) {
    res = []
    //creating n x n matrix filled with 0
    for (let i=0; i<n;i++){
        res[i] = new Array (n)
        res[i].fill(0)
    }
    
    let i=0,
        j=0,
        c=1
    
    //check if res[x][y] exist and not filled
    function check(x,y){
        try{
            if(res[x][y]==0)
            return true
        }
        catch (e){
            return false
        }   
    }
    
    while(check(i,j)){
        //filling to the right
        while(check(i,j)){
            res[i][j] = c
            c++
            j++
        }
        j--
        i++
        //filling to the bottom
        while(check(i,j)){
            res[i][j] = c
            c++
            i++
        }
        i--
        j--
        //filling to the left
        while(check(i,j)){
            res[i][j] = c
            c++
            j--
        }
        j++
        i--
        //filling to the top
        while(check(i,j)){
            res[i][j] = c
            c++
            i--
        }
        i++
        j++
        //repeat
    }
    
    return res
}
