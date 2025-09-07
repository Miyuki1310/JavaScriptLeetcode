const jump = (nums) => {
    let curFurthest = 0
    let curEnd = 0
    let jump = 0
    for(let i = 0; i < nums.length -1 ;i++) {
        curFurthest = Math.max(curFurthest, i + nums[i])
        if(i == curEnd) {
            jump++
            curEnd = curFurthest
        }
    }
    return jump
}

console.log(jump([2,3,1,1,4]));
