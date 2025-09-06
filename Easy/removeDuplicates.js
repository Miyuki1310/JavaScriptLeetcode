const removeDuplicates = (nums) => {
    const expected = {}
    let k = 0;
    for(let i =0; i< nums.length; i++) {
        if(!expected[nums[i]]){
            expected[nums[i]] = i+1;
            nums[k] = nums[i]
            k++
        }
    }
    for(let i =k; i<nums.length; i++) {
        nums[i] = "_"
    }
    return Object.keys(expected).length
}

console.log(removeDuplicates([1,1,2]));
