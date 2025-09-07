// const canJump = (nums) => {
//     const lastIndex = nums.length -1
//     if(nums.length == 1) return true
//     for(let i = 0; i < nums.length; i++) {
//         console.log(i);
//         console.log(nums[i]);
        
//         i = i+nums[i]    
//         if(nums[i] == 0){
//             return i== lastIndex ? true : false
//         } 
//         else if(i >= lastIndex) {
//             return true
//         }
//     }
//     return true
// } wrong

//other solution
const canJump2 = (nums) => {
    let goal = nums.length -1
    for(let  i = goal-1; i> -1; i--) {
        if(i + nums[i] >=goal) {
            goal = i
        }
    }
    return goal == 0 ? true : false
}

console.log(canJump([2,5,0,0]));
