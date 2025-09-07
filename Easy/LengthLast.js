const lengthLast = (s) => {
    const temp = s.trim()
    let count = 0;
    for(let i = temp.length - 1; i >= 0; i--) {  
        console.log(temp[i]);
              
        if(temp[i] == ' '){
            return count
        }
        count++
    }
    return count
}

console.log(lengthLast("a"));
