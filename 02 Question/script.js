/*
Q2. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.
Example :
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
*/

// first method
function remove(nums, val){
    let len = nums.length;
    var count = 0;
    for(let i=0; i<len; i++){
        if(nums[i] === val){
            nums[count++]
        }
    }
    return count
}

const nums = [3,2,2,3];
const val = 3;
console.log(remove(nums, val))


// ===================== //

// Second method

// function remove(nums, val){
//     let len = nums.length;
//     for(let i=0; i<len; i++){
//         if(nums[i] === val){
//             nums.splice(i, 1);
//             i--
//         }
//     }
//     return nums.length;
// }


// const nums = [3,2,2,3];
// const val = 3;
// console.log(remove(nums, val))