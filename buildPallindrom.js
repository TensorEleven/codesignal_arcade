//pallindromeCheck function
isPallindrome = (str) => {
        let i = 0,
            len = str.length,
            range = Math.floor(len/2)
            
        while (i<range){
            if (str[i]!=str[len-i-1])
                return false
            i++
        }
        return true
    }


function buildPalindrome(st) {
    st = [...st] // use st as array so we can use Array.splice() methode
    
    let i = 0,
        len = st.length // avoid calculation of length in while loop
        
    while (i<len){
        if(isPallindrome(st)) i = len
        else st.splice(len,0,st[i]) //insert one by one from first element of st,right int the end of original string
        i++    
    }
    
    st = st.join("") // make a string from st array
    return st
}
