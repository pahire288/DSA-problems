// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// Explanation:
// Rotate 1 step right: [7,1,2,3,4,5,6]
// Rotate 2 steps right: [6,7,1,2,3,4,5]
// Rotate 3 steps right: [5,6,7,1,2,3,4]


let  nums = [1,2,3,4,5,6,7], k = 3;

let newarr = [];

for(let i=nums.length-k;i<nums.length;i++)
{
    newarr.push(nums[i]);
}

for(let i=0;i<nums.length-k;i++)
{
    newarr.push(nums[i]);
}

console.log(newarr);