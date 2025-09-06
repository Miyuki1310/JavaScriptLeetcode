const isPalindrome = (x) => {
    let reminder = x;
    let reverse = 0;
    if(x < 0){
        return false
    }
    while(reminder > 0){        
        reverse = reverse * 10 + reminder%10;
        reminder = Math.trunc(reminder / 10)
    }
    
    if(reverse == x){
        return true
    }
    return false
}

console.log(isPalindrome(121));
