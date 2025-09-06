const longestPrefix = (strs) => {
    if(!strs.length) return ""
    let minlen = strs[0].length
    for(let i =0 ; i< strs.length; i++) {
        if(strs[i].length < minlen) {
            minlen = strs[i].length
        }
    }

    for(let i = 0; i< minlen; i++) {
        const c = strs[0][i]
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== c){
                return strs[0].slice(0, i)
            }
        }
    }
    return strs[0].slice(0 , minlen)
}

console.log(longestPrefix(["aa", "ab"]));
console.log(longestPrefix(["flower","flow","flight"]));

