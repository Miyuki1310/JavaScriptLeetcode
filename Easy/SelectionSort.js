const selectionSort = (nums) => {
    for(let i =0; i< nums.length; i++) {
        let min = i;
        for(let j = i+1; j < nums.length; j++) {
            if(nums[j] < nums[min]) {
                min = j
            }
        }
        const temp = nums[i]
        nums[i] = nums[min]
        nums[min] = temp
    }

    return nums
}

console.log(selectionSort([4,6,7,1,8,3,4,9]));
