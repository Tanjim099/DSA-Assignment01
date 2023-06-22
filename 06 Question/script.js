/*
Q6. Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]

Output: true
*/

function checkDuplicates(nums){
    const seen = new Set();
    for(let i=0; i<nums.length; i++){
        if(seen.has(nums[i])){
            return true;
        }
        else{
            seen.add(nums[i]);
        }
    }
    return false
}


const nums = [1,2,3,1];
console.log(checkDuplicates(nums));