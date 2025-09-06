const merge = (nums1, m, nums2, n) => {
    nums1.splice(m, nums1.length - m)
    nums1.push(...nums2.slice(0,n))
    nums1.sort()
    return nums1
}
let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
console.log(merge(nums1, m, nums2, n));
