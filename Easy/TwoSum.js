const twoSum = (nums, target) => {
    const result = {}
    for(let i =0 ;i < nums.length; i++) {
        if(result.hasOwnProperty(target - nums[i])){
            return [result[`${target - nums[i]}`], i]
        }
        result[nums[i]] = i
    }
}


const nums = [2,7,11,15], target = 9

console.log(twoSum(nums, target));