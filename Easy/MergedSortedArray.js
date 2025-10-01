// const merge = (nums1, m, nums2, n) => {
//     nums1.splice(m, nums1.length - m)
//     nums1.push(...nums2.slice(0,n))
//     nums1.sort()
//     return nums1
// }
// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// console.log(merge(nums1, m, nums2, n));

const mergedSortedArray = (nums1, m, nums2, n) => {
    nums1.splice(m, nums1.length-m)
    nums2.splice(n, nums2.length-n)
    nums1.push(...nums2)
    return nums1.sort((a,b) => a-b)
}
let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
console.log(mergedSortedArray(nums1, m, nums2, n));
