const binarySearch = (nums, target) => {
    let l = 0
    let r = nums.length -1
    while(l<=r) {
        const mid = Math.floor((l+r) /2)
        if(nums[mid] === target) return mid
        else if(nums[mid] < target) l = mid + 1
        else r = mid - 1
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 11));
