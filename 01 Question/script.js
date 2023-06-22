/*
Q1. Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

You can return the answer in any order.

Example:
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]
*/
// function twoSum(nums,target){
//     nums.sort((a,b)=>a-b);
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] + nums[i+1] == target){
//             return [i, i+1];
//         }
//     }
// }

// const nums = [2,7,11,15];
// const target = 9;

// console.log(twoSum(nums, target));

function twoSum(nums, target){
    let start = 0;
    let end = nums.length -1;
    while(start < end){
        if(nums[start] + nums[end] === target){
            return [start,end];
        }
        else if(nums[start] + nums[end] < target){
            start++
        }
        else{
            end--
        }
    }
};

const nums = [2,7,11,15];
const target = 9;

console.log(twoSum(nums, target))