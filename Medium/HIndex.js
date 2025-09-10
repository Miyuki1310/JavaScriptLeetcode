const HIndex = (nums) => {
    const temp = nums.sort((a,b) => b-a) 
    let h = 0;
    for(let i =0; i<temp.length; i++) {
        if(temp[i] >= i+1){
            h = i+1
        }
    }
    return h
}

var hIndex = function(citations) {
  const n = citations.length
  const count = new Array(n+1).fill(0)
  for(let i = 0; i< n; i++) {
    if(citations[i] >=n) count[n]++
    count[i]++
  }

  let total = 0;
  for(let i = n; i<count.length; i++){
    total+= count[i]
    if(total >= i) return i
  }
  return 0
};

// console.log(HIndex([3,0,6,1,5]));
console.log(hIndex([2,0,6,1,5]));

