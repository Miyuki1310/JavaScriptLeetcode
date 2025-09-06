const majorityElement = (nums) => {
    const hashmap = {}
    let majority = 0;
    let result = 0;
    for(let i =0; i< nums.length; i++) {
        hashmap[nums[i]] = hashmap[nums[i]] ? hashmap[nums[i]] +1 : 1
        if(hashmap[nums[i]] > majority ){
            result = nums[i]
            majority = hashmap[nums[i]]
        }
    }
    return result
}

const newMajorityElement = (nums) => {
    const numsLen = nums.length
    let candidate = null;
    let count = 0;
    for(let i = 0; i< numsLen; i++) {
        const x = nums[i]
        if(count == 0) {
            candidate = nums[i]
            count = 1
        }
        else if(x === candidate) {
            count++
        }
        else{
            count--
        }
    }
    return candidate
}

console.log(majorityElement([2,2,1,1,1,2,2]));
