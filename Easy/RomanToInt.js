const RomanToInt = (x) => {
    let finalResult = 0;
    const symbol = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    const result = ""
    if(x< 0){
        return false
    }
    const array = x.split("");
    console.log(array);
    
    for(let i = array.length - 1; i >= 0; i--){
        let result = symbol[`${array[i]}`]
        
        if(symbol[`${array[i]}`] > symbol[`${array[i-1]}`]){
            result = symbol[`${array[i]}`] - symbol[`${array[i-1]}`]
            i--
        }
        finalResult += result
    }
    return finalResult
}

console.log(RomanToInt("XXVII"));
