/*
Q8. You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately,
due to some error, one of the numbers in s got duplicated to another number in the set, 
which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
*/

function findErrorNums(nums) {
    const res = [];
    
    for (let num of nums) {
        num = Math.abs(num);
        
        if (nums[num - 1] < 0) res.push(num);
        else nums[num - 1] = -nums[num - 1];
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) res.push(i + 1);
        if (res.length === 2) return res;
    }
};
const nums = [1,2,2,4]
console.log(findErrorNums(nums));