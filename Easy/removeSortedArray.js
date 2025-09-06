const removeSortedArray = (nums) => {
    let k = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[k-1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
}

//another solution
// var removeDuplicates = function(nums) {
//     const expected = {}
//     let k = 0;
//     for(let i =0; i< nums.length; i++) {
//         if(!expected[nums[i]]){
//             expected[nums[i]] = i+1;
//             nums[k] = nums[i]
//             k++
//         }
//     }
//     return k
// };

console.log(removeSortedArray([0,0,1,1,1,2,2,3,3,4]));
