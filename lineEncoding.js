/*
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example

For s = "aabbbc", the output should be
lineEncoding(s) = "2a3bc".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

String consisting of lowercase English letters.

Guaranteed constraints:
4 ≤ s.length ≤ 15.

[output] string

Encoded version of s.*/

function lineEncoding(s) {
    let len = s.length,
        i=0,
        tmp = s[0],
        c = 0,
        ans =[]
        
    while (i<len){
        if(s[i]===tmp)
            c++
        if(s[i]!=tmp){
            if (c>1)
                ans.push(c.toString( )+s[i-1])
            else
                ans.push(s[i-1])
            c=1
            tmp = s[i]
        }
        if(i==len-1){
            if(c>1)
                ans.push(c.toString()+s[i])
            else 
                ans.push(s[i]) 
        }
            
        i++
    }
    return ans.join("")
}
