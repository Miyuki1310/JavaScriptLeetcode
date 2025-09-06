const rotate = (nums, k) => {
    const n = nums.length;
    if (n <= 1) return nums;
    k = k % n;              // rút gọn k
    if (k === 0) return nums;

  const reverse = (l, r) => {
    while (l < r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++; r--;
    }
  };

  reverse(0, n - 1);     // 1) đảo toàn mảng
  reverse(0, k - 1);     // 2) đảo k phần tử đầu
  reverse(k, n - 1);     // 3) đảo phần còn lại
  return nums;
}

console.log(rotate([1,2,3,4,5,6,7], 3));
