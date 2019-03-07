/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description https://leetcode.com/problems/two-sum/
 */

// O(N^2)
var twoSum = function(nums, target) {
    for(let i=0 ;i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};


// var twoSum = function(nums, target) {
//     let idx;
//     for(let i=0 ;i<nums.length; i++) {
//         idx = nums.lastIndexOf(target - nums[i]);
//         if(idx <0 ) continue;
//         if(i !== idx) {
//             return [i, idx];
//         } 
//     }
// };


// 모범답안 O(N)
// var twoSum = function(nums, target) {
//     let res = {}
//     for (let i=0; i<nums.length; i++) {
//         let tmp = target - nums[i];
//         if (nums[i] in res) {
//            // console.log(res)
//             return [res[nums[i]] , i];
//         }
//         res[tmp] = i;
//     }
//     return null;
// };