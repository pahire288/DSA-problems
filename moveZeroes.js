//Given an array nums, move all 0's to the end while maintaining the relative order of non-zero elements.

//Input: [0,1,0,3,12]
//Output: [1,3,12,0,0]


let array = [0,1,0,3,12];

let newarr = [];

for(let i=0;i<array.length;i++)
{
    for(let j=0;j<array.length;j++)
    {
        if(array[i] > array[j])
        {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

console.log(array);