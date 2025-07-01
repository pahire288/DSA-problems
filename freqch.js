let arr = ['trhg','trkl','ttttrmo'];

let obj = {};

 let str ="";
for(let i=0;i<arr.length;i++)
{
     str += arr[i];
}


for(let i = 0;i<str.length;i++)
{
    if(obj[str[i]])
    {
        obj[str[i]]++;
    }
    else{
        obj[str[i]] = 1;
    }
}

let ans = "";

for(let key in obj)
{
    if(obj[key] > 1)
    {
        console.log(`${key} :${obj[key]}`);
    }
}

// console.log(ans)