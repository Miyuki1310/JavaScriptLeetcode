// const removeElement = (nums, val) => {
//     const expected = []
//     let k = 0;
//     for(let i = 0; i< nums.length ; i++) {
//         if(nums[i] !== val) {
//             expected.push(nums[i])
//             nums[k] = nums[i]
//             k++
//         }
//     }
//     for(let i = k; i<nums.length; i++) {
//         nums[i] = "_"
//     }
//     return expected.length
// }

const removeElement = (nums, val) => {
    let k = 0;
    for(let i =0; i< nums.length; i++) {
        if(nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
    }
    return k;
}

let nums = [0,1,2,2,3,0,4,2], val = 2

console.log(removeElement(nums, val));

