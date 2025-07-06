//Find duplicates in an array
//Input:

//Array: 4 3 2 7 8 2 3 1

//Output :  [2, 3]

//Explanation: In the given array, the integers 2 and 3 appear more than once.

let arr = [4 ,3, 2, 7, 8, 2, 3, 1];

let obj = {};

for(let i=0;i<arr.length;i++)
{
    if(obj[arr[i]])
    {
        obj[arr[i]]++;
    }else{
        obj[arr[i]] = 1;
    }
}


for(let i in obj)
{

    if(obj[i] > 1)
    {
        console.log(i);
    }
}

