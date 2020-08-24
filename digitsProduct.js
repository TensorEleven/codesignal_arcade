/*
    Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

For product = 12, the output should be
digitsProduct(product) = 26;
For product = 19, the output should be
digitsProduct(product) = -1.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer product

Guaranteed constraints:
0 ≤ product ≤ 600.

[output] integer
*/


function digitsProduct(product) {
    //because product is less than 600
    //this way is faster to implement without execution time limit exedeed
    for(i=1;i<=3400;i++){
            //creating tmp array to store i digit
        let tmp = [...(i).toString()],
            //calculate i digit product
            prod = tmp.reduce((a,b)=>parseInt(a)*parseInt(b))
        if (prod == product)
            return i
    }
    return -1
}
