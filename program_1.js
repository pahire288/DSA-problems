//Find the first non-repeating character in a string


// Input: "aabbccdeff"
// Output: "d"

let str =  "aabbccdeff";


let obj ={};


for(let i=0;i<str.length;i++)
{
    if(obj[str[i]]){

       obj[str[i]]++;
    }else{
        obj[str[i]] = 1;
    }
}


for(let key in obj)
{
    if(obj[key] === 1)
    {
        console.log(key);
        break;
    }
}
