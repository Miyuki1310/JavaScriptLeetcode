// const removeDuplicates = (nums) => {
//      const hash = {}
//     let k = 0
//     for(let i = 0; i < nums.length; i++) {
//         hash[nums[i]] = hash[`${nums[i]}`] ? hash[nums[i]] + 1 : 1
//         if(hash[nums[i]] < 3) {
//             nums[k] = nums[i]
//             k++
//         }
//     }

//     for(let i = k; i< nums.length; i++) {
//         nums[i] = "_"
//     }
//     return k
// }

// const removeDuplicates2 = (nums) => {
//     let  k = 0
//     for(let i = 0; i < nums.length; i++) {
//         console.log(nums[i], nums[i-2]);
        
//         if(k < 2 || nums[i] != nums[k-2]) {
            
//             nums[k++] = nums[i]    
//         }
        
//     }
//     return k
// }

// console.log(removeDuplicates2([0,0,1,1,1,1,2,3,3]));

// console.log(removeDuplicates2([1,1,1,2,2,3]));

const removeDuplicates = (nums) => {
    let k =2
    for(let i = 2; i< nums.length; i++) {
        if(nums[i] != nums[k-2]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
}
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));