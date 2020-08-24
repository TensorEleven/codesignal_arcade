/*
Codewriting
300

CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string 

to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, 

so he needs a program that sums up all the numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

Example

For inputString = "2 apples, 12 oranges", the output should be
sumUpNumbers(inputString) = 14.
*/
function sumUpNumbers(inputString) {
    let i=0,
        len = inputString.length,
        tmp = [], //to store consecutive digit
        ans = [] //to store founded number
        
    while (i<len){
        //check if is a number (digit), pull " " out because isNaN(" ")=true
            if(!isNaN(inputString[i])&&inputString[i]!=" "){
                tmp+=inputString[i]
                //add tmp if end
                if(i==(len-1)){
                    //parseInt("15")=15
                    ans.push(parseInt(tmp))
                }
            }
            //check if tmp is empty
            else if (tmp.length>0){
                //add consecutive digit to ans
                ans.push(parseInt(tmp))
                //emptying tmp
                tmp = []
            }
    i++
    }
    //if ans is empty, return 0
    //else returne sum of ans element
    return ans.length==0?0:ans.reduce((a,b)=>a+b)
}