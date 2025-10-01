// const removeDuplicates = (nums) => {
//     const expected = {}
//     let k = 0;
//     for(let i =0; i< nums.length; i++) {
//         if(!expected[nums[i]]){
//             expected[nums[i]] = i+1;
//             nums[k] = nums[i]
//             k++
//         }
//     }
//     for(let i =k; i<nums.length; i++) {
//         nums[i] = "_"
//     }
//     return Object.keys(expected).length
// }

const removeDuplicates = (nums) => {
    let k = 0
    for(let i =0; i<nums.length; i++) {
        if(k==0) {
            nums[k] = nums[i]
            k++
        }
        if(nums[i] !== nums[k-1]) {
            nums[k] = nums[i]
            k++
        }
    }
    
    return k
}

console.log(removeDuplicates([1,1,2]));
