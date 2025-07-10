
//Check whether the string is Anagram or not


 let s = "abcd" , t = "acdb"

    let obj = {};


    for (let i = 0; i < s.length; i++)
    {
        if (obj[s[i]])
        {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++)
    {
        if (obj[t[i]])
        {
            obj[t[i]]++;
        } else {
            obj[t[i]] = 1;
        }
    }

let flag = false;
    for (let key in obj)
    {
        
        if (obj[key] === 2)
        {
            flag = true;
        } else {
            flag = false;
            return flag;
        }
    }

    console.log( flag);
    
