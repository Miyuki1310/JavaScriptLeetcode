const symbol = {
    ")" : "(",
    "}" : "{",
    "]" : "["
}
const isValid = (s) => {
    if(s.length<=1) return false
    const stack = []
    for(let i =0; i < s.length; i++) {
        if(s[i] == "{" || s[i] == "(" || s[i] == "["){
            stack.push(s[i])
        }
        else if(symbol[`${s[i]}`] && symbol[`${s[i]}`] == stack[stack.length-1]){
            stack.pop()
        }
        else{ 
            return false
        }
    }
    return stack.length == 0
}

console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([])"))
console.log(isValid("([)]"))
