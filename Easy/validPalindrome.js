const validPalindrome = (s) => {
    const temp = s.replace(/[^a-zA-Z]/g, "").toLowerCase()
    for(let i =0; i <= temp.length / 2; i++) {
        if(temp[i] !== temp[temp.length - i - 1]){
            return false
        }
    }
    return true
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));
