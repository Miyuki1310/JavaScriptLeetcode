const maxProfit = (prices) => {
   let bestBuy = Number.MAX_SAFE_INTEGER;
   let result = 0
   for(let i =0; i< prices.length; i++){
    let current = prices[i]
    if(bestBuy > prices[i]){
        bestBuy = prices[i]
    }
    else{
        
        if(current - bestBuy > result) result = current - bestBuy
    }
   }
   return result
}

var newMaxProfit = function(prices) {
  let bestEndHere = 0; // max subarray sum kết thúc tại i trên dãy chênh lệch
  let best = 0;
  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1]; 
    console.log(diff);
    
    bestEndHere = Math.max(0, bestEndHere + diff);
    best = Math.max(best, bestEndHere);
  }
  return best;
};

console.log(newMaxProfit([7,1,5,3,6,4]));
