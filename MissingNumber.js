
// Problem Statement: Find the Missing Number

// Input: arr = [1, 2, 4, 5], n = 5
// Output: 3

let arr = [1, 2, 4, 5], n = 5;

let ans = 0;

for(let i=0;i<arr.length-1;i++)
{
    if(arr[i] + 1 === arr[i+1])
    {
        continue;
    }else
    {
        ans = arr[i]+1;
    }
}

console.log(ans)