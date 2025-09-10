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

var majorityElement2 = function(nums) {
  let candidate = null;  // ứng viên hiện tại
  let count = 0;         // số phiếu cho ứng viên đó

  for (let num of nums) {
    if (count === 0) {
      // nếu không còn ứng viên → chọn num hiện tại làm ứng viên mới
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      // nếu num == ứng viên → tăng phiếu
      count++;
    } else {
      // nếu num khác ứng viên → giảm phiếu
      count--;
    }
  }

  // theo đề: majority element luôn tồn tại → candidate chắc chắn là kết quả
  return candidate;
};

console.log(majorityElement2([2,2,1,1,1,3,3]));
